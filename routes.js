// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logut";
const SEARCH = "/search";

// Users

const USERS = "/users";
const USER_DETAIL = "/:id";
// 위 2개를 합치면 이런식으로 됨 => /users/1
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos

const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
// 위 3개(videos + video_detail + edit_video를 합칠 경우 => videos/1/edit
const DELETE_VIDEO = "/:id/delete";
