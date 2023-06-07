console.log("\n\n MODAL Start ____-Apis/MapSimple/src/modal.js");

async function TravelLoop(CurrentPosition) {
  console.log("TravelLoop() ___-APIs/MapSimple/src");

  await Initiations(CurrentPosition, 800);
  // map.setZoom(13)
}

// ============================= //
async function ButtonDonate() {
  // OpenModal(MakeModalOf(ModalDonate()))
  instances = MakeModalOf(ModalDonate());
  OpenModal(instances, 9999999).then((r) => {
    //after the animation and all
  });
}
async function PlayMusic() {
  music_Instance = MakeModalOf(ModalPlayMusic());
  OpenModal(music_Instance, 9999999).then(() => {
    // console.log('Success')
  });
}

function StartPositionLoop() {
  // async () => {

  // INSERT THE FUNCTIONS HERE
  // INSERT THE FUNCTIONS HERE
  // INSERT THE FUNCTIONS HERE
  // xx()
  // await Initiations(1, 800)
  // CurrentPosition = AllPosition[iPosition]
  if (iPosition >= AllPosition.length) {
    console.log("ALL POSITION MARKED and ENDED");

    function EndingScene(position) {
      map.disableDefaultUI = false;
      map.setZoom(7); //zoom OUT on END
      map.setCenter(position);
      // map.setStreetView(position);
      // map.setdisableDefaultUI(false);

      console.log("Scence Ended");
    }
    EndingScene(AllPosition[iPosition - 2]);
    // EndingScene(CurrentPosition)
    return;
  }
  CurrentPosition = { lat: AllPosition[iPosition][0], lng: AllPosition[iPosition][1] };

  titlePosition = AllPosition[iPosition][2];
  parPosition = AllPosition[iPosition][3];
  urlPosition = AllPosition[iPosition][4];
  durationPosition = AllPosition[iPosition][5];

  // console.log(CurrentPosition)
  // console.log(CurrentPosition);
  // console.log(titlePosition);
  // console.log(parPosition);
  // console.log(urlPosition);
  // ++++++******************

  TravelLoop(CurrentPosition);

  // INSERT THE FUNCTIONS HERE
  // INSERT THE FUNCTIONS HERE
  // INSERT THE FUNCTIONS HERE
  instances = MakeModalOf(ModalVideo(titlePosition, parPosition, urlPosition));
  setTimeout(() => {
    // map.setZoom(14)
    // setTimeout(() => {
    OpenModal(instances, durationPosition).then((r) => {
      //after the animation and all
      StartPositionLoop();
    });
    // }, 1000)
  }, 3000);

  iPosition += 1;
}

// ============================= //
function sleep(ms) {
  console.log("sleep() ___-APIs/MapSimple/src");
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
  // return 'yes', resolve()
}
async function OpenModal(instances, duration) {
  instances.close();

  instances.open();
  await sleep(duration);
  instances.close();
  return "the Last return";
  console.log("Next Func");
}

function MakeModalOf(WhatModal) {
  instant = CreateModal(WhatModal);
  return instant;
}

function CreateModal(what) {
  console.log("CreateModal() ___APIs/MapSimple/src");
  removeElement = document.querySelector("#MiniVideoPlayer");
  if (removeElement) {
    //remove the previous Element
    removeElement.remove();
  }
  ModalDiv = document.createElement("div");
  ModalDiv.setAttribute("id", "MiniVideoPlayer");
  ModalDiv.innerHTML = what;

  // toShow.innerHTML = ModalDiv
  // document.querySelector("#toshow").appendChild = ModalDiv;
  document.body.appendChild(ModalDiv);

  // removed from here To
  var elems = document.querySelector(".modal");
  var instances = M.Modal.init(elems, {
    opacity: 0.4,
    inDuration: 1000,
  });
  return instances;
  // here
}

function ModalPlayVideo() {
  // can be not in Use// ** FOR EXAMPLE PURPOSE **
  Video1 = `https://www.youtube.com/embed/0iYsBnj2BUk?autoplay=1&mute=1`;
  Title = "First Title";
  Paragraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, commodi aut? Facilis sed ipsum omnis saepe praesentium, unde amet hic! Eveniet, iusto ad quos rem magni dignissimos obcaecati maxime odit?";
  theStructure = ModalVideo(Title, Paragraph, Video1);
  return theStructure;
}

function ModalVideo(VideoTitle, VideoDescription, VideoUrl) {
  VideoStructure = `
                <div id="modal1" class="modal">
                    <div class="modal-content">

                        <iframe id="iframevid" 
                            src="${VideoUrl}" title="YouTube video player"
                            frameborder="0" autoplay='true'
                            allow="accelerometer; autoplay:true; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                        <h4>${VideoTitle}</h4>
                        <p>${VideoDescription}</p>
                            <div id="subscribeDiv">
                                <i>
                                <img  id="imgIcon" src="/materialize/image/bagpack.png">
                                </i>
                                <a href="https://www.youtube.com/@BBvlogger0_0?sub_confirmation=1" id="subscribeURL" target="_blank" >
                                    Subscribe
                                </a>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button id="donate-btn" onclick="ButtonDonate()">Donate Us</button>
                    </div>
                </div>
            `;
  return VideoStructure;
}
function ModalDonate() {
  DonateStructre = `
                <div id="modal1" class="modal">
                    <div class="modal-content">  
                        <h4>Want me to Travel More?</h4>
                        <p>Donate now! . .</p>                          
                        <form action="https://www.paypal.com/donate" method="post" target="_blank">
                                                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit"
                                title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                                <br>
                            <input style="height: 38vw;" type="image" src="me.jpeg" border="0" name="submit"
                                title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                            <input type="hidden" name="hosted_button_id" value="T4D87WHFPE8KQ" />
                            <br>
                        </form>
                    </div>

                </div>
        `;
  //     <div class="modal-footer">
  //     <button id="donate-btn" onclick="ButtonDonate()">Donate Us</button>
  // </div>
  return DonateStructre;
  // ModalDiv.innerHTML = DonateStructre;
}

function ModalPlayMusic() {
  ToPlayMusicStructure = `
        <div id="buttonPlayit">
        <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
        
        <!-- Modal Structure -->
        <div id="modal1" class="modal bottom-sheet">
            <div class="modal-content">
                <h4>Modal Header</h4>
                <p>A bunch of text</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
            </div>
        </div>
        <input id="buttonPlay" type="button" value="PLAY" onclick="toPlay1.play()">
    </div>`;

  return ToPlayMusicStructure;
}

console.log("END ____-Apis/MapSimple/src/modal.js \n\n ");
