import type { I18nSchema } from './en'

const zhTW: I18nSchema = {
  nav: {
    home: '首頁',
    rooms: '客房',
    specials: '優惠',
    dining: '餐飲',
    wellness: '健康養生',
    activities: '活動',
    events: '活動企劃',
    about: '關於我們',
    booking: '預訂',
    information: '資訊',
    faq: '常見問題',
    contact: '聯絡我們',
    privacyPolicy: '隱私政策',
    switchLang: 'EN'
  },
  footer: {
    address: '135 Bear Wallow Ln, Sedona, AZ 86336',
    phone: 'T. 480.000.0000',
    fax: 'F. 480.000.0002',
    reservationPhone: 'T. 480.000.0001',
    followUs: '關注我們',
    links: '連結',
    privacyPolicy: '隱私政策',
    faq: '常見問題',
    contact: '聯絡我們',
    copyright: '© A Resort & Spa。保留所有權利。'
  },
  common: {
    send: '傳送',
    submit: '提交',
    cancel: '取消',
    yes: '確認',
    ok: '確定',
    required: '此欄位為必填',
    success: '成功',
    error: '發生錯誤，請再試一次。',
    readyToSubmit: '確定要提交嗎？',
    requestCanceled: '已取消請求'
  },
  newsletter: {
    title: '訂閱我們的最新消息與優惠',
    fullName: '姓名*',
    fullNamePlaceholder: '姓名',
    email: '電子郵件*',
    emailPlaceholder: '電子郵件地址',
    address: '地址*',
    addressPlaceholder: '地址',
    stateRegion: '州／省／地區*',
    stateRegionPlaceholder: '州／省／地區',
    country: '國家*',
    countryPlaceholder: '國家',
    zipCode: '郵遞區號',
    signUp: '立即訂閱',
    alreadySubscribed: '您已在我們的訂閱名單中，非常感謝您。',
    thankYou: '感謝您選擇與我們保持聯繫！',
    thankYouSub: '期待您的到來。'
  },
  contact: {
    title: '聯絡我們',
    subtitle: '與我們取得聯繫',
    description: '我們很樂意為您提供協助，您也可以在常見問題頁面找到所需資訊。',
    address: '135 Bear Wallow Ln, Sedona, AZ 86336',
    forReservation: '訂房諮詢：',
    formTitle: '聯絡我們，很高興聽到您的意見。',
    fullName: '姓名*',
    email: '電子郵件*',
    phone: '電話號碼*',
    purpose: '目的*',
    purposeOptions: {
      dining: '餐廳訂位',
      pr: '公共關係',
      activities: '飯店活動',
      room: '客房預訂',
      sales: '業務諮詢',
      donation: '捐款申請'
    },
    comments: '留言',
    commentsPlaceholder: '請告訴我們您需要哪方面的協助',
    bookingNumber: '訂單編號*',
    bookingNumberPlaceholder: '請輸入您的訂房或預訂編號',
    bookingNumberRequired: '訂單編號為必填',
    consent: '我了解此表單會收集我的姓名、電子郵件及電話號碼，以便與我聯繫。更多資訊請查看我們的',
    privacyPolicy: '隱私政策',
    successMessage: '您的請求已成功送出。',
    refLabel: '您的諮詢參考編號'
  },
  wedding: {
    title: '婚禮',
    subtitle: '索取婚禮企劃書',
    description: '我們為您的婚禮提供多種可能性。請在婚禮日期兩週前填寫以下表格，我們的團隊將盡快與您聯繫，提供更多詳情。',
    phone: '如需直接聯繫，請撥打 480.000.0008',
    titleField: '稱謂',
    firstName: '名字*',
    firstNamePlaceholder: '名字',
    lastName: '姓氏*',
    lastNamePlaceholder: '姓氏',
    phoneNum: '電話號碼*',
    phoneNumPlaceholder: '請從國碼開始輸入（+）',
    email: '電子郵件*',
    emailPlaceholder: '電子郵件地址',
    weddingDate: '婚禮日期',
    selectAll: '請勾選所有適用項目',
    services: {
      ceremony: '典禮 / 婚宴',
      shower: '婚前派對',
      dinner: '彩排晚宴',
      guestrooms: '僅住宿',
      reception: '僅婚宴',
      brunch: '抵達 / 離境早午餐'
    },
    numberOfGuest: '賓客人數*',
    consent: '我了解此表單會收集我的姓名、電子郵件及電話號碼，以便與我聯繫。更多資訊請查看我們的',
    privacyPolicy: '隱私政策',
    successMessage: '您的請求已成功送出。',
    orderLabel: '您的婚禮訂單編號'
  },
  reservation: {
    emailConfirmNote: '確認信已傳送至您的電子郵件地址。',
    emailFailed: '您的預訂已確認，但我們無法傳送確認信。如有需要請與我們聯繫。'
  }
}

export default zhTW
