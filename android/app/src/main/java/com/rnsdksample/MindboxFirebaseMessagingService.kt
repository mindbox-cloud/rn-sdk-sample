package com.rnsdksample

import android.util.Log
import cloud.mindbox.mindbox_firebase.MindboxFirebase
import cloud.mindbox.mobile_sdk.Mindbox
import com.google.firebase.messaging.FirebaseMessagingService
import com.google.firebase.messaging.RemoteMessage

class MindboxFirebaseMessagingService : FirebaseMessagingService() {
    override fun onNewToken(token: String) {
        Mindbox.updatePushToken(applicationContext, token, MindboxFirebase)
    }

    override fun onMessageReceived(remoteMessage: RemoteMessage) {

        val channelId = "default_channgel_id"
        val channelName = "default_channel_name"
        val channelDescription = "default_channel_description"
        val pushSmallIcon = R.mipmap.ic_launcher

        // The method returns a boolean to allow for a fallback in handling push notifications
        val messageWasHandled = Mindbox.handleRemoteMessage(
            context = applicationContext,
            message = remoteMessage,
            activities = mapOf(),
            channelId = channelId,
            channelName = channelName,
            pushSmallIcon = pushSmallIcon,
            defaultActivity = MainActivity::class.java,
            channelDescription = channelDescription
        )

        val mindboxMessage = MindboxFirebase.convertToMindboxRemoteMessage(remoteMessage)

        if (!messageWasHandled) {
            Log.d("PushNotification", "Received an unsupported or incorrect push notification.")
        }
    }
}
