<template>
  <nav>
    <div class="nav__container util__flex--row">
      <div class="nav__logo">
        <h1>A Hotel</h1>
      </div>
      <div class="nav__link">
        <ul class="util__flex--row">
          <li class="util__flex--row" style="align-items: center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 20px; height: 20px; margin-right: 5px;" xml:space="preserve">
              <path d="M23.368,12.162l-11-12c-0.189-0.207-0.547-0.207-0.736,0l-11,12c-0.135,0.146-0.169,0.358-0.09,0.539C0.622,12.883,0.802,13,1,13h2.5v10.5C3.5,23.776,3.724,24,4,24h5c0.276,0,0.5-0.224,0.5-0.5V16h5v7.5c0,0.276,0.224,0.5,0.5,0.5h5c0.276,0,0.5-0.224,0.5-0.5V13H23c0.198,0,0.378-0.117,0.458-0.299C23.537,12.52,23.503,12.308,23.368,12.162z"/>
            </svg>
            <router-link to="/">BACK TO HOTEL</router-link>
          </li>
          <li class="util__flex--row" style="align-items: center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 20px; height: 20px; margin-right: 5px;" xml:space="preserve">
              <path d="M16,3.5C16,2.673,15.327,2,14.5,2h-5C8.673,2,8,2.673,8,3.5V5H7v17h10V5h-1V3.5z M9,3.5C9,3.224,9.224,3,9.5,3h5C14.775,3,15,3.224,15,3.5V5H9V3.5z"/>
              <rect x="5" y="5" width="1" height="17"/>
              <path d="M0,8.5v10C0,20.43,1.57,22,3.5,22H4V5H3.5C1.57,5,0,6.57,0,8.5z"/>
              <path d="M20.5,5H20v17h0.5c1.93,0,3.5-1.57,3.5-3.5v-10C24,6.57,22.43,5,20.5,5z"/>
              <rect x="18" y="5" width="1" height="17"/>
            </svg>
            <router-link to="/manage-booking">MY TRIPS</router-link>
          </li>
          <li class="util__flex--row" style="align-items: center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 20px; height: 20px; margin-right: 5px;" xml:space="preserve">
              <path d="M2.801,10.066c0.547,0.547,1.539,0.53,2.044,0.023c0.744-0.688,1.563-1.258,2.428-1.69C7.809,8.139,8,7.506,8,7V6.374C9.276,6.031,10.725,6,12,6c1.351,0,2.764,0.031,4,0.371V7c0,0.664,0.268,1.19,0.712,1.406c0.904,0.452,1.726,1.02,2.439,1.689c0.272,0.257,0.642,0.405,1.014,0.405c0.393,0,0.76-0.15,1.034-0.424l2.376-2.376C23.849,7.426,24,7.059,24,6.665c0-0.393-0.15-0.76-0.435-1.043C20.923,3.117,17.355,2,12,2C6.644,2,3.077,3.117,0.424,5.631C0.15,5.905,0,6.272,0,6.665c0,0.396,0.158,0.773,0.424,1.024L2.801,10.066z"/>
              <path d="M12,7c-2.804,0-5,1.538-5,3.5S9.196,14,12,14s5-1.538,5-3.5S14.804,7,12,7z"/>
              <path d="M20.181,12.473c-0.351-0.351-0.818-0.518-1.306-0.475c-0.519,0.047-0.992,0.33-1.298,0.775C16.662,14.105,14.421,15,12,15c-2.42,0-4.662-0.895-5.577-2.227c-0.306-0.446-0.779-0.729-1.298-0.776c-0.485-0.042-0.952,0.123-1.303,0.474l-2.792,2.792C0.308,15.985,0,16.604,0,17.328V19.5C0,20.879,1.122,22,2.5,22h19c1.379,0,2.5-1.121,2.5-2.5v-2.172c0-0.668-0.26-1.295-0.732-1.768L20.181,12.473z"/>
            </svg>
            +1.480.000.0000
          </li>
          <li class="util__flex--row" style="align-items: center">
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 24 24" style="enable-background:new 0 0 24 24; width: 20px; height: 20px; margin-right: 5px;" xml:space="preserve">
              <path d="M14.584,14.594c0-0.966-0.86-1.774-2-1.96v3.919C13.724,16.367,14.584,15.56,14.584,14.594z"/>
              <path d="M9.584,9.594c0,0.966,0.86,1.774,2,1.96V7.634C10.445,7.82,9.584,8.628,9.584,9.594z"/>
              <path d="M12.084,0.594c-6.341,0-11.5,5.159-11.5,11.5s5.159,11.5,11.5,11.5s11.5-5.159,11.5-11.5S18.426,0.594,12.084,0.594zM15.584,14.594c0,1.508-1.308,2.747-3,2.957v0.543c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V17.55c-1.692-0.21-3-1.449-3-2.957c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,0.966,0.86,1.774,2,1.96V12.55c-1.692-0.21-3-1.449-3-2.957s1.308-2.747,3-2.957V6.094c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v0.543c1.692,0.21,3,1.449,3,2.957c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5c0-0.966-0.86-1.774-2-1.96v4.003C14.276,11.847,15.584,13.086,15.584,14.594z"/>
            </svg>
            US DOLLARS
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script></script>
<style lang="scss" scoped>
  nav {
    position: relative;
    width: 100%;
    height: 10vh;
    padding: 20px 5vw;
    .nav {
      &__container {
        width: 100%;
        justify-content: space-between;
        align-items: center;
      }
      &__logo {
        & h1 {
          font-size: 2rem;
        }
      }
      &__link {
        & ul {
          list-style-type: none;
          & li {
            padding: 0 10px;
            font-size: 1.2rem;
            font-weight: 600;
            & a {
              text-decoration: none;
              &:visited {
                color: #3d405b;
              }
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
