import MindboxSdk, { LogLevel } from 'mindbox-sdk'
import Snackbar from 'react-native-snackbar'
import { Alert } from 'react-native'

// Define the operation names
const asyncViewProductOperationName = 'viewProduct'
const syncRecoOperationName = 'categoryReco.sync'

// Async operation request body
const requestProductOperationBodyAsync = {
  viewProduct: {
    productGroup: {
      ids: {
        website: 'test-1',
      },
    },
  },
}

// Sync operation request body
const requestRecoBodySync = {
  recommendation: {
    limit: 100,
    productCategory: {
      ids: {
        website: '156',
      },
    },
    area: {
      ids: {
        externalId: '1345ff',
      },
    },
  },
}

const sendAsync = () => {
  MindboxSdk.executeAsyncOperation({
    operationSystemName: asyncViewProductOperationName,
    operationBody: requestProductOperationBodyAsync,
  })
  Alert.alert('Async Operation', 'The operation was sent.')
}

const sendSync = async () => {
  MindboxSdk.executeSyncOperation({
    operationSystemName: syncRecoOperationName,
    operationBody: requestRecoBodySync,
    onSuccess: (data) => {
      // On success, display the response data
      Alert.alert('Sync Operation Success', JSON.stringify(data, null, 2))
    },
    onError: (error) => {
      // On error, display the error message
      Alert.alert('Sync Operation Error', JSON.stringify(error, null, 2))
    },
  })
}

export { sendSync, sendAsync }
