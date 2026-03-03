// Root store
export const RESET_SIDEBAR_STATE = 'resetSidebarState' as const
export const RESET_MODAL_STATE = 'resetModalState' as const
export const DISPLAY_MOBILE_SIDEBAR = 'displayMobileSidebar' as const
export const DISPLAY_RESERVATION_MODAL = 'displayReservationModal' as const

// Booking module
export const GET_BOOKING_RESULT = 'getBookingResult' as const
export const CANCEL_CHECKING_REQUEST = 'cancelCheckingRequest' as const
export const SUBMIT_CHECKING_REQUEST = 'submitCheckingRequest' as const
export const CANCEL_BOOKING = 'cancelBooking' as const
export const SUBMIT_BOOKING_REQUEST = 'submitBookingRequest' as const
export const SUBMIT_FILTER_CHOICE = 'submitFilterChoice' as const
export const RESET_FILTER_CHOICE = 'resetFilterChoice' as const
export const LEAVE_SEARCH_RESULT = 'leaveSearchResult' as const

// Reservation module
export const RESET_ALL_RESERVATION = 'resetAllReservation' as const
export const GO_NEXT_STEP = 'goNextStep' as const
export const BACK_PREVIOUS_STEP = 'backPreviousStep' as const
export const SWITCH_STEP = 'switchStep' as const
export const INIT_ROOM = 'initRoom' as const
export const INIT_RESERVATION = 'initReservation' as const
export const INIT_ON_SEARCH_ROOM = 'initOnSearchRoom' as const
export const ADD_ANOTHER_ROOM = 'addAnotherRoom' as const
export const GENERATE_ID = 'generateId' as const
export const SEARCH_ROOM_TYPE = 'searchRoomType' as const
export const ADD_ROOM_TO_SELECTION = 'addRoomToSelection' as const
export const REMOVE_ROOM_FROM_SELECTION = 'removeRoomFromSelection' as const
export const EDIT_ROOM_FROM_SELECTION = 'editRoomFromSelection' as const
export const ADD_ADDONS_TO_SELECTION = 'addAddonsToSelection' as const
export const REMOVE_ADDONS_FROM_SELECTION = 'removeAddonsFromSelection' as const
export const CALCULATE_TOTAL_AMOUNT = 'calculateTotalAmount' as const
export const SAVE_ROOM_SELECTION_TO_RESERVATION = 'saveRoomSelectionToReservation' as const
export const FORWARD_TO_CUSTOMER_INFO = 'forwardToCustomerInfo' as const
export const ADD_CUSTOMER_DETAILS = 'addCustomerDetails' as const
export const SAVE_CUSTOMER_INFO_TO_RESERVATION = 'saveCustomerInfoToReservation' as const
export const FORWARD_TO_CONFIRMATION = 'forwardToConfirmation' as const
export const SET_CONFIRMATION_NUM = 'setConfirmationNum' as const
export const SUBMIT_RESERVATION = 'submitReservation' as const
export const RESET_RESERVED_INFO = 'resetReservedInfo' as const
export const DISCARD_CHANGES = 'discardChanges' as const
