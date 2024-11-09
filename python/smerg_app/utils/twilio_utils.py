#################################  S E N D  O T P  C O D E  U S I N G  T W I L I O  #################################
import json
from django.conf import settings
from twilio.rest import Client

async def twilio_int(otp, number):

    # @sync_to_async
    # def send_whatsapp_message():
    #     client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    #     message = client.messages.create(
    #         content_sid="HX74f435f5b9a65118273b98cddd6bfc01",
    #         from_='whatsapp:+917594088814',
    #         to=f'whatsapp:+91{number}',
    #         content_variables=json.dumps({"1": str(otp)})
    #     )
    #     return message.sid

    # message_sid = await send_whatsapp_message()
    # print(f"Message sent successfully. SID: {message_sid}")

    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        content_sid="HX74f435f5b9a65118273b98cddd6bfc01",
        from_='whatsapp:+917594088814',
        to= f'whatsapp:+91{number}',
        content_variables=json.dumps({"1": str(otp),}),
    )
    print(message.sid)