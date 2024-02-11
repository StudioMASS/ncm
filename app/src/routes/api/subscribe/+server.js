import mailchimp from '@mailchimp/mailchimp_marketing';
import { MAILCHIMP_API_KEY, MAILCHIMP_SERVER, MAILCHIMP_LIST } from '$env/static/private';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: MAILCHIMP_SERVER
});

async function signup(email_address) {
	return await mailchimp.lists.setListMember(
		MAILCHIMP_LIST,
		email_address,
		{
			email_address: email_address,
			status_if_new: 'subscribed',
			status: 'subscribed'
		},
		{
			skip_merge_validation: true
		}
	);
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { email_address } = await request.json();

	try {
		await signup(email_address);
		return new Response(JSON.stringify({ message: 'success' }));
	} catch (error) {
		let message = error.message;
		if (error.response) {
			message = error.response.body.detail;
			if (message[message.length - 1] === '.') {
				message = message.slice(0, -1);
			}
		}
		return new Response(JSON.stringify({ message }), { status: 500 });
	}
}
