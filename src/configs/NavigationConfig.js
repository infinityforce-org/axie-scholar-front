import { DashboardOutlined } from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";
import CustomIcon from "components/util-components/CustomIcon";
import styled from "styled-components";

const dashboardIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.91211 21.04H5.91211C4.81211 21.04 3.91211 20.14 3.91211 19.04V5.04004C3.91211 3.94004 4.81211 3.04004 5.91211 3.04004H9.91211C11.0121 3.04004 11.9121 3.94004 11.9121 5.04004V19.04C11.9121 20.14 11.0121 21.04 9.91211 21.04ZM15.9121 21.04H19.9121C21.0121 21.04 21.9121 20.14 21.9121 19.04V14.04C21.9121 12.94 21.0121 12.04 19.9121 12.04H15.9121C14.8121 12.04 13.9121 12.94 13.9121 14.04V19.04C13.9121 20.14 14.8121 21.04 15.9121 21.04ZM21.9121 8.04004V5.04004C21.9121 3.94004 21.0121 3.04004 19.9121 3.04004H15.9121C14.8121 3.04004 13.9121 3.94004 13.9121 5.04004V8.04004C13.9121 9.14004 14.8121 10.04 15.9121 10.04H19.9121C21.0121 10.04 21.9121 9.14004 21.9121 8.04004Z"
      fill="#929292"
    />
  </svg>
);

const paymentIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.91349 10.0169C4.91349 7.89898 4.91349 5.7811 4.91349 3.66329C4.91349 2.60732 5.60909 1.9162 6.67106 1.91602H18.1952C19.2528 1.91602 19.9441 2.61012 19.9443 3.67153C19.9443 7.8994 19.945 12.1271 19.9465 16.3546C19.9553 16.6973 19.8823 17.0371 19.7336 17.346C19.5849 17.6548 19.3648 17.9238 19.0915 18.1307C17.1569 19.6933 15.2261 21.2606 13.299 22.8326C12.7249 23.2991 12.146 23.3065 11.5695 22.8388C9.60216 21.2425 7.63617 19.6446 5.67156 18.045C5.42994 17.8549 5.23585 17.6112 5.10464 17.3331C4.97344 17.0551 4.9087 16.7503 4.91555 16.4429C4.9118 14.301 4.91112 12.159 4.91349 10.0169ZM13.951 18.8016C15.0169 17.861 16.0378 16.962 17.0563 16.0603C17.1933 15.9407 17.302 15.7922 17.3745 15.6254C17.4471 15.4587 17.4816 15.2779 17.4757 15.0962C17.4746 14.2747 17.4795 13.4533 17.4741 12.6318C17.4718 12.3155 17.3707 12.0079 17.185 11.7519C16.9992 11.4959 16.7381 11.3043 16.4382 11.204C16.3507 11.1747 16.2611 11.1532 16.1517 11.122C17.0248 10.9273 17.4754 10.3604 17.4754 9.48171C17.4754 8.23321 17.4754 6.98489 17.4754 5.73676C17.4754 4.89803 16.9617 4.3844 16.1221 4.38421C13.6583 4.38421 11.194 4.38421 8.72916 4.38421C7.90093 4.38421 7.38223 4.89801 7.38204 5.71968C7.38129 8.82824 7.38061 11.9369 7.37998 15.0456C7.37383 15.2511 7.41477 15.4553 7.49967 15.6426C7.58456 15.8299 7.71116 15.9953 7.86979 16.1261C8.40556 16.5889 8.93289 17.0616 9.46434 17.5297C9.93333 17.9424 10.4023 18.3536 10.9071 18.7984V12.0112C10.9433 11.9936 10.9572 11.981 10.9711 11.981C11.5266 11.9786 12.0822 11.9752 12.6379 11.9763C12.8135 11.9661 12.9894 11.9933 13.1537 12.0561C13.3181 12.1189 13.4673 12.2159 13.5914 12.3406C13.7155 12.4653 13.8117 12.615 13.8737 12.7796C13.9357 12.9443 13.9621 13.1202 13.951 13.2959C13.951 15.0354 13.951 16.7749 13.951 18.5146V18.8016Z"
      fill="#929292"
    />
    <path
      d="M10.9224 6.10449H13.9511V6.4686C13.9511 7.19271 13.9539 7.91684 13.9511 8.64095C13.9549 8.80631 13.925 8.9707 13.8634 9.12418C13.8018 9.27766 13.7096 9.41703 13.5925 9.53384C13.4754 9.65064 13.3358 9.74244 13.1821 9.80369C13.0285 9.86493 12.864 9.89434 12.6987 9.89013C12.1123 9.89313 11.5259 9.89013 10.9233 9.89013L10.9224 6.10449Z"
      fill="#929292"
    />
  </svg>
);

const ScholarsIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.9121 11.916C18.5721 11.916 19.9021 10.576 19.9021 8.91602C19.9021 7.25602 18.5721 5.91602 16.9121 5.91602C15.2521 5.91602 13.9121 7.25602 13.9121 8.91602C13.9121 10.576 15.2521 11.916 16.9121 11.916ZM8.91211 11.916C10.5721 11.916 11.9021 10.576 11.9021 8.91602C11.9021 7.25602 10.5721 5.91602 8.91211 5.91602C7.25211 5.91602 5.91211 7.25602 5.91211 8.91602C5.91211 10.576 7.25211 11.916 8.91211 11.916ZM8.91211 13.916C6.58211 13.916 1.91211 15.086 1.91211 17.416V19.916H15.9121V17.416C15.9121 15.086 11.2421 13.916 8.91211 13.916ZM16.9121 13.916C16.6221 13.916 16.2921 13.936 15.9421 13.966C17.1021 14.806 17.9121 15.936 17.9121 17.416V19.916H23.9121V17.416C23.9121 15.086 19.2421 13.916 16.9121 13.916Z"
      fill="#929292"
    />
  </svg>
);

const LeaderboardIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.7842 13.9622C20.0896 10.6266 18.1423 8.11568 14.9605 6.50853C14.7537 6.40406 14.6738 6.29585 14.696 6.08042C14.7377 5.67402 14.7628 5.26599 14.7886 4.85825C14.8052 4.59663 14.6964 4.40036 14.4286 4.30201C12.9659 3.7651 11.53 3.74107 10.1505 4.53162C10.0446 4.59229 9.96302 4.78751 9.97174 4.91377C10.0044 5.23381 10.058 5.55161 10.132 5.86536C10.2671 6.53308 10.2622 6.52241 9.67794 6.91574C7.27226 8.53505 5.80473 10.7439 5.13318 13.4541C4.51576 15.9459 5.20121 18.098 7.06928 19.8933C8.59462 21.3593 10.5526 21.8498 12.6593 21.9151C14.1852 21.9384 15.5942 21.5041 16.9536 20.9135C19.7992 19.677 21.39 16.8707 20.7842 13.9622ZM18.7584 13.5908L17.4749 15.6866L14.2659 14.0481L11.4781 16.8297L8.38944 14.4101L6.26348 16.2391L6.02287 14.029L6.36379 15.2865L8.38944 13.7242L11.2374 15.82L14.1856 13.4193L17.3144 14.867L18.6983 12.9157L19.8014 14.5241L18.7584 13.5908ZM17.6182 18.8592C17.1208 19.2353 16.554 19.3452 16.3524 19.1045C16.1507 18.8639 16.3905 18.3638 16.8879 17.9876C17.3854 17.6114 17.9522 17.5016 18.1539 17.7422C18.3556 17.9829 18.1158 18.4831 17.6182 18.8592ZM10.3815 9.06368C10.9298 9.39098 10.8259 10.4855 10.1493 11.5084C9.47261 12.5312 8.47954 13.0951 7.93124 12.7678C7.38294 12.4405 7.48687 11.3459 8.16344 10.323C8.84002 9.30016 9.83317 8.73632 10.3815 9.06368Z"
      fill="#929292"
    />
  </svg>
);

const SettingsIcon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.3522 13.906L20.3422 13.926C20.3822 13.596 20.4222 13.256 20.4222 12.916C20.4222 12.576 20.3922 12.256 20.3522 11.926L20.3622 11.946L22.8022 10.026L20.3722 5.80602L17.5022 6.96602L17.5122 6.97602C16.9922 6.57602 16.4222 6.23602 15.8022 5.97602H15.8122L15.3522 2.91602H10.4822L10.0422 5.98602H10.0522C9.43223 6.24602 8.86223 6.58602 8.34223 6.98602L8.35223 6.97602L5.47223 5.80602L3.03223 10.026L5.47223 11.946L5.48223 11.926C5.44223 12.256 5.41223 12.576 5.41223 12.916C5.41223 13.256 5.44223 13.596 5.49223 13.926L5.48223 13.906L3.38223 15.556L3.05223 15.816L5.48223 20.016L8.36223 18.866L8.34223 18.826C8.87223 19.236 9.44223 19.576 10.0722 19.836H10.0422L10.4922 22.916H15.3422C15.3422 22.916 15.3722 22.736 15.4022 22.496L15.7822 19.846H15.7722C16.3922 19.586 16.9722 19.246 17.5022 18.836L17.4822 18.876L20.3622 20.026L22.7922 15.826C22.7922 15.826 22.6522 15.706 22.4622 15.566L20.3522 13.906ZM12.9122 16.416C10.9822 16.416 9.41223 14.846 9.41223 12.916C9.41223 10.986 10.9822 9.41602 12.9122 9.41602C14.8422 9.41602 16.4122 10.986 16.4122 12.916C16.4122 14.846 14.8422 16.416 12.9122 16.416Z"
      fill="#929292"
    />
  </svg>
);

const dashBoardNavTree = [
  {
    key: "dashboard",
    path: `/dashboard`,
    title: "dashboard",
    icon: dashboardIcon,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "Scholars",
    path: `/Scholars`,
    title: "Scholars",
    icon: ScholarsIcon,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "Leaderboard",
    path: `/Leaderboard`,
    title: "Leaderboard",
    icon: LeaderboardIcon,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "payment",
    path: `/payment`,
    title: "Payments",
    icon: paymentIcon,
    breadcrumb: false,
    submenu: [],
  },
  {
    key: "Settings",
    path: `/Settings`,
    title: "Settings",
    icon: SettingsIcon,
    breadcrumb: false,
    submenu: [],
  },
];

const navigationConfig = [...dashBoardNavTree];

export default navigationConfig;