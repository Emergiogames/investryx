#################################  P U S H  N O T I F I C A T I O N  #################################
from onesignal_sdk.client import Client
from onesignal_sdk.client import AsyncClient
from django.conf import settings
from .enc_utils import *

async def send_notifications(message, title, onesignal_id):

    @sync_to_async
    def send_noti():
        client = Client(app_id=settings.ONESIGNAL_APP_ID, rest_api_key=settings.ONESIGNAL_API_KEY)
        print(f"working : {client}")
        notification_body = {
            "headings": {"en": title},
            "contents": {"en": decrypt_message(message)},
            "include_player_ids": [onesignal_id]
        }
        response = client.send_notification(notification_body)
        return response.body
    
    response = await send_noti()
    print(f"Notification sent successfully. SID: {response}")