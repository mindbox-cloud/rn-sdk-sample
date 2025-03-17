import UserNotifications
import MindboxNotifications

class NotificationService: UNNotificationServiceExtension {

  lazy var mindboxService: MindboxNotificationServiceProtocol = MindboxNotificationService()

  override func didReceive(_ request: UNNotificationRequest, withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void) {
    mindboxService.didReceive(request, withContentHandler: contentHandler)
  }

  override func serviceExtensionTimeWillExpire() {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
    mindboxService.serviceExtensionTimeWillExpire()
  }
}
