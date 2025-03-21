import UIKit
import UserNotifications
import UserNotificationsUI
import MindboxNotifications

class NotificationViewController: UIViewController, UNNotificationContentExtension {
    
  lazy var mindboxService: MindboxNotificationContentProtocol = MindboxNotificationService()

  func didReceive(_ notification: UNNotification) {
    mindboxService.didReceive(notification: notification, viewController: self, extensionContext: extensionContext)
  }

}
