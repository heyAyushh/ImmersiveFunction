require('dotenv').config();
const axios = require('axios').default;

module.exports = async function(context, req) {
	try {
		const tokenResponse = await axios.post(
			`https://login.windows.net/${process.env.TENANT_ID}/oauth2/token`,
			new URLSearchParams({
				grant_type: 'client_credentials',
				client_id: process.env.CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				resource: 'https://cognitiveservices.azure.com/'
			}).toString(),
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}
		);

		var tokenResultParsed = tokenResponse.data;
		context.res = {
			status: 200,
			body: { token: tokenResultParsed.access_token, subdomain: process.env.SUBDOMAIN }
		};
	} catch (err) {
		console.log(err);
		context.res = {
			status: 500,
			error: 'Unable to acquire Azure AD token. Check the debugger for more information.'
		};
	}
};
