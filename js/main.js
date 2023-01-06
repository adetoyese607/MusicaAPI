function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  }

  window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.is-active').classList.remove('is-active');
            tab_switcher.parentNode.classList.add('is-active');

            SwitchPage(page_id);
        });
    }
}

function SwitchPage (page_id) {
    const current_page = document.querySelector('.pages .page.is-active');
    current_page.classList.remove('is-active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`);
     next_page.classList.add('is-active');
}

const music = new Audio(`rock.mp3`);
// music.play()
const songss = [
{
  id: '1',
songName: `Let me love you ~
 <span class="artist">Krisx </span>`,
poster: 'assets/Rectangle 25.png'
},
{
  id: '2',
songName: `Watin man go do ~ 
 <span class="artist">Burna </span>`,
poster: 'assets/Rectangle 26.png'
},
{
  id: '3',
songName: `Stand strong ~ 
<span class="artist">Davido</span>`,
poster: 'assets/Rectangle 27.png'
}

]

Array.from(document.getElementsByClassName('music')).forEach((element, i)=>{
  element.getElementsByTagName('img')[0].src = songss[i].poster;
})