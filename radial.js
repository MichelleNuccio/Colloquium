(() => {
  const clusters=[...document.querySelectorAll(".cluster")];
  const sets=[["Channel Chasers"]];
  const points=[
    [-510,-300,120],[-190,-440,-180],[350,-330,80],[-400,-80,-260],[450,-70,210],[-540,170,30],
    [-260,340,190],[40,-410,270],[490,230,-130],[250,400,160],[-60,460,-250],[550,80,-300],
    [-420,360,-170],[180,-300,-310],[390,330,300],[-620,420,250],[80,380,350],[520,-300,-20]
  ];
  const metrics=["37.0902 N","23.32 TRILLION","14.67 METRIC TONS","95.7129 W","6,804.00 KG","12,993.97 KWH"];
  let n=0;
  clusters.forEach((cluster,c)=>sets[c].forEach((name,i)=>{
    const [x,y,z]=points[n],code=`${"ABC"[c]}-${String(i+1).padStart(2,"0")}`;
    const ray=document.createElement("div");ray.className="ray";
    for(let s=1;s<=26;s++){const frame=document.createElement("i"),t=s/26;frame.style.transform=`translate3d(${x*t-75}px,${y*t-75}px,${z*t}px) scale(${.08+.92*t})`;frame.style.opacity=String(.15+.55*t);ray.append(frame)}
    cluster.append(ray);
    const card=document.createElement("button");card.className=`card ${c===0&&i===0?"reference-card":""}`;card.dataset.code=code;card.dataset.title=name;card.style.transform=`translate3d(${x}px,${y}px,${z}px)`;card.innerHTML=c===0&&i===0?`<img src="assets/channel-chasers.png" alt="Timmy Turner attraversa lo spazio televisivo in Channel Chasers"><span><small>${code}</small><strong>${name}</strong></span>`:`<small>${code}</small><strong>${name}</strong><em>${cluster.dataset.name} / 2026</em>`;cluster.append(card);
    const metric=document.createElement("span");metric.className="metric";metric.textContent=metrics[(n+i)%metrics.length];metric.style.transform=`translate3d(${x+82}px,${y+82}px,${z}px)`;cluster.append(metric);n++;
  }));
  const core=document.createElement("div");core.className="core";core.innerHTML='<i class="axis x"></i><i class="axis y"></i><i class="axis z"></i>';document.querySelector("#world").append(core);
  const conceptData=[
    ["THE SCREEN BECOMES A SPACE","The screen ceases to be a surface of representation and becomes an inhabitable environment.",[-180,-125,50]],
    ["EACH CHANNEL IS A TERRITORY","Television becomes an archipelago of heterogeneous worlds: differentiated territories rather than one homogeneous network.",[-205,20,-35]],
    ["NAVIGATION, NOT VIEWING","The remote becomes an instrument for moving between worlds rather than a device for passive consumption.",[-135,155,75]],
    ["THE ENVIRONMENT TRANSFORMS THE SUBJECT","The traveler is not external to the territory; each media environment reshapes embodiment, perception, and agency.",[80,175,-45]],
    ["MEDIA AS GEOMORPHOLOGY","Moving between adjacent media ecologies resembles crossing geological formations rather than browsing information.",[190,70,65]]
  ];
  const [parentX,parentY,parentZ]=points[0];
  conceptData.forEach((item,index)=>{
    const [title,description,offset]=item,[ox,oy,oz]=offset,x=parentX+ox,y=parentY+oy,z=parentZ+oz;
    const trail=document.createElement("div");trail.className="concept-ray";
    for(let step=1;step<=9;step++){const frame=document.createElement("i"),t=step/9;frame.style.transform=`translate3d(${parentX+(x-parentX)*t-70}px,${parentY+(y-parentY)*t-34}px,${parentZ+(z-parentZ)*t}px) scale(${.18+.82*t})`;trail.append(frame)}
    clusters[0].append(trail);
    const concept=document.createElement("button");concept.className="concept-card";concept.dataset.title=title;concept.dataset.description=description;concept.style.transform=`translate3d(${x}px,${y}px,${z}px)`;concept.innerHTML=`<small>CONCEPT / 0${index+1}</small><strong>${title}</strong>`;clusters[0].append(concept);
  });
  const phraseCluster=document.createElement("section");phraseCluster.className="phrase-cluster";
  const phrasePositions=[[-470,-540,80],[-90,-540,135]];
  const phraseTexts=["DIGITAL MANIFESTATION",'HOW CAN WE REPRESENT SOMETHING "INVISIBLE"?'];
  phraseTexts.forEach((text,index)=>{
    const [x,y,z]=phrasePositions[index],box=document.createElement("div");box.className=`phrase-box phrase-${index+1}`;box.style.transform=`translate3d(${x}px,${y}px,${z}px)`;box.innerHTML=`<small>CONCEPTUAL QUESTION / 0${index+1}</small><strong>${text}</strong>`;phraseCluster.append(box);
  });
  const phraseBridge=document.createElement("div");phraseBridge.className="phrase-bridge";
  for(let step=1;step<=10;step++){const frame=document.createElement("i"),t=step/10;frame.style.transform=`translate3d(${phrasePositions[0][0]+(phrasePositions[1][0]-phrasePositions[0][0])*t-105}px,${phrasePositions[0][1]+(phrasePositions[1][1]-phrasePositions[0][1])*t-45}px,${phrasePositions[0][2]+(phrasePositions[1][2]-phrasePositions[0][2])*t}px) scale(${.2+.8*t})`;phraseBridge.append(frame)}
  phraseCluster.append(phraseBridge);document.querySelector("#world").append(phraseCluster);
  const landCluster=document.createElement("section");landCluster.className="land-cluster";
  const landItems=[
    {kind:"lead",x:470,y:-620,z:40,label:"METHOD / LAND ART",title:"LAND ART CAN BE USED LIKE A LENS?",text:"My primary reference is Land Art. I aim to investigate the web through the same conceptual lens with which Land Art artists engaged the landscape."},
    {kind:"image",x:955,y:-620,z:90,src:"assets/lightning-field.png",label:"THE LIGHTNING FIELD",credit:"W. DE MARIA"},
    {kind:"text",x:470,y:-260,z:-20,label:"PROCESS / 01",text:"The artwork is not the landscape itself, but the process of revealing the forces that continuously generate its morphology."},
    {kind:"text",x:955,y:-260,z:70,label:"AUTONOMY / 02",text:"Its existence is autonomous; the artist merely sets the forces in motion."},
    {kind:"image wide",x:470,y:110,z:120,src:"assets/epigenetic-landscape.png",label:"EPIGENETIC LANDSCAPE",credit:"C. WADDINGTON"},
    {kind:"text large",x:955,y:110,z:-20,label:"LATENT POTENTIAL / 03",text:"The landscape is not designed but generated. Each input produces a new morphology. The epigenetic landscape reveals what already exists as latent potential, but has yet to be expressed."}
  ];
  landItems.forEach((item,index)=>{
    const panel=document.createElement(item.kind.includes("image")?"button":"article");panel.className=`land-panel ${item.kind}`;
    panel.style.transform=`translate3d(${item.x}px,${item.y}px,${item.z}px)`;
    panel.innerHTML=item.kind.includes("image")?`<img src="${item.src}" alt="${item.label}"><span><small>${item.label}</small><em>${item.credit}</em></span>`:`<small>${item.label}</small>${item.title?`<strong>${item.title}</strong>`:""}<p>${item.text}</p>`;
    if(item.src){panel.dataset.src=item.src;panel.dataset.title=item.label;panel.dataset.credit=item.credit}
    landCluster.append(panel);
    if(index>0){const trail=document.createElement("div");trail.className="land-trail";for(let step=1;step<=7;step++){const frame=document.createElement("i"),t=step/7;frame.style.transform=`translate3d(${610+(item.x-610)*t-90}px,${-545+(item.y+545)*t-55}px,${40+(item.z-40)*t}px) scale(${.18+.82*t})`;trail.append(frame)}landCluster.append(trail)}
  });
  document.querySelector("#world").append(landCluster);
  const physicalCluster=document.createElement("section");physicalCluster.className="physical-cluster";
  const physicalPositions=[[430,365,115],[675,445,185]];
  const physicalTexts=["PHYSICAL MANIFESTATION","LET'S INVESTIGATE THESE ELEMENTS"];
  physicalTexts.forEach((text,index)=>{
    const [x,y,z]=physicalPositions[index],box=document.createElement("div");box.className="physical-box";box.style.transform=`translate3d(${x}px,${y}px,${z}px)`;box.innerHTML=`<small>PHYSICAL INQUIRY / 0${index+1}</small><strong>${text}</strong>`;physicalCluster.append(box);
  });
  const physicalBridge=document.createElement("div");physicalBridge.className="physical-bridge";
  for(let step=1;step<=10;step++){const frame=document.createElement("i"),t=step/10;frame.style.transform=`translate3d(${430+245*t-105}px,${365+80*t-45}px,${115+70*t}px) scale(${.2+.8*t})`;physicalBridge.append(frame)}
  physicalCluster.append(physicalBridge);document.querySelector("#world").append(physicalCluster);
  const physicalInfo=document.createElement("section");physicalInfo.className="physical-info";
  const datasetBox=document.createElement("button");datasetBox.className="physical-info-box dataset-box";datasetBox.style.transform="translate3d(520px,360px,65px)";datasetBox.innerHTML="<small>COLLECTION / 001</small><strong>DATASET</strong><span>22 PHYSICAL + ECOLOGICAL LAYERS &rarr;</span>";physicalInfo.append(datasetBox);
  const ecologyBox=document.createElement("button");ecologyBox.className="physical-info-box ecology-box";ecologyBox.style.transform="translate3d(930px,360px,-35px)";ecologyBox.innerHTML="<small>ECOLOGICAL ENTANGLEMENTS / 002</small><strong>EVERYTHING IS INTERCONNECTED</strong><span>WHAT LANDSCAPES DOES THE INTERNET PRODUCE? &rarr;</span>";physicalInfo.append(ecologyBox);
  const classificationBox=document.createElement("div");classificationBox.className="physical-info-box classification-box";classificationBox.style.transform="translate3d(1340px,360px,145px)";classificationBox.innerHTML="<small>CRITICAL QUESTION / 003</small><strong>DOES WORKING WITH ELEMENTS ALSO MEAN GENERATING A CLASSIFICATION?</strong>";physicalInfo.append(classificationBox);
  const rhizomeBox=document.createElement("button");rhizomeBox.className="physical-info-box rhizome-box";rhizomeBox.style.transform="translate3d(520px,670px,105px)";rhizomeBox.innerHTML='<img src="assets/thousand-plateaus.png" alt="A Thousand Plateaus di Gilles Deleuze e Felix Guattari"><span><small>REFERENCE / RHIZOME</small><strong>HORIZONTAL AND NON-HIERARCHICAL MODEL</strong></span>';physicalInfo.append(rhizomeBox);
  const physicalReferences=[
    {title:"Hyperobjects",author:"Timothy Morton",src:"assets/hyperobjects.png",pos:[930,670,70]},
    {title:"Environments of Planetary Urbanization",author:"Neil Brenner, Swarnabh Ghosh, Nikos Katsikis",src:"assets/planetary-urbanization.png",pos:[1340,670,120]}
  ];
  physicalReferences.forEach((item,index)=>{
    const card=document.createElement("button");card.className="reference-index-card physical-reference-card";card.style.transform=`translate3d(${item.pos[0]}px,${item.pos[1]}px,${item.pos[2]}px)`;card.dataset.src=item.src;card.dataset.title=item.title;card.dataset.author=item.author;card.innerHTML=`<img src="${item.src}" alt="${item.title}"><span><small>CLUSTER 02 / REF ${String(index+1).padStart(2,"0")}</small><strong>${item.title}</strong><em>${item.author}</em></span>`;physicalInfo.append(card);
  });
  [[675,445,185,520,360,65],[675,445,185,930,360,-35],[675,445,185,520,670,105]].forEach(coords=>{
    const [sx,sy,sz,tx,ty,tz]=coords,trail=document.createElement("div");trail.className="physical-info-trail";
    for(let step=1;step<=8;step++){const frame=document.createElement("i"),t=step/8;frame.style.transform=`translate3d(${sx+(tx-sx)*t-90}px,${sy+(ty-sy)*t-52}px,${sz+(tz-sz)*t}px) scale(${.2+.8*t})`;trail.append(frame)}
    physicalInfo.append(trail);
  });
  const classificationTrail=document.createElement("div");classificationTrail.className="physical-info-trail";
  for(let step=1;step<=8;step++){const frame=document.createElement("i"),t=step/8;frame.style.transform=`translate3d(${520+820*t-90}px,${360-52}px,${65+80*t}px) scale(${.2+.8*t})`;classificationTrail.append(frame)}
  physicalInfo.append(classificationTrail);
  document.querySelector("#world").append(physicalInfo);
  const mappingCluster=document.createElement("section");mappingCluster.className="mapping-cluster";
  const mappingItems=[
    {type:"question",x:-1320,y:260,z:80,label:"REPRESENTATION / ECOSYSTEM",title:"HOW CAN WE REPRESENT THE ECOSYSTEM?"},
    {type:"image",x:-840,y:260,z:120,label:"CARTOGRAPHIC OVERLAY",src:"assets/ecosystem-overlay.png"},
    {type:"image",x:-1320,y:640,z:-20,label:"TEMPORAL MAPPING / PLANTING CALENDAR",src:"assets/planting-calendar.png"},
    {type:"image portrait",x:-840,y:640,z:110,label:"MAPPING MATRIX / ECOLOGICAL RELATIONS",src:"assets/mapping-matrix.png"},
    {type:"reference",x:-360,y:640,z:-80,label:"REFERENCE / LANDSCAPE",title:"TAKING MEASURES ACROSS THE AMERICAN LANDSCAPE",text:"James Corner + Alex S. MacLean"}
  ];
  mappingItems.forEach((item,index)=>{
    const panel=document.createElement(index===0||item.type==="reference"?"div":"button");panel.className=`mapping-panel ${item.type}`;panel.style.transform=`translate3d(${item.x}px,${item.y}px,${item.z}px)`;
    panel.innerHTML=item.type.includes("image")?`<img src="${item.src}" alt="${item.label}"><span><small>${item.label}</small><b>OPEN &nearr;</b></span>`:`<small>${item.label}</small><strong>${item.title}</strong>${item.text?`<em>${item.text}</em>`:""}`;
    if(item.src){panel.dataset.src=item.src;panel.dataset.title=item.label}
    mappingCluster.append(panel);
    if(index>0){const trail=document.createElement("div");trail.className="mapping-trail";for(let step=1;step<=8;step++){const frame=document.createElement("i"),t=step/8;frame.style.transform=`translate3d(${-875+(item.x+875)*t-95}px,${325+(item.y-325)*t-60}px,${80+(item.z-80)*t}px) scale(${.2+.8*t})`;trail.append(frame)}mappingCluster.append(trail)}
  });
  document.querySelector("#world").append(mappingCluster);
  const powerCluster=document.createElement("section");powerCluster.className="power-cluster";
  const powerQuestion=document.createElement("div");powerQuestion.className="power-question";powerQuestion.style.transform="translate3d(-260px,470px,-120px)";powerQuestion.innerHTML="<small>POWER / SYSTEMS / 001</small><strong>HOW ARE THEY RELATED TO THE GENERATION OF POWER?</strong>";powerCluster.append(powerQuestion);
  const powerImage=document.createElement("button");powerImage.className="power-image";powerImage.style.transform="translate3d(360px,470px,35px)";powerImage.innerHTML='<img src="assets/calculating-empires.png" alt="Calculating Empires di Kate Crawford e Vladan Joler"><span><small>CALCULATING EMPIRES</small><b>KATE CRAWFORD + VLADAN JOLER / 2023 &nearr;</b></span>';powerCluster.append(powerImage);
  const powerTrail=document.createElement("div");powerTrail.className="power-trail";
  for(let step=1;step<=12;step++){const frame=document.createElement("i"),t=step/12;frame.style.transform=`translate3d(${-120+285*t-140}px,${545+50*t-55}px,${-180+215*t}px) scale(${.16+.84*t})`;powerTrail.append(frame)}
  powerCluster.append(powerTrail);document.querySelector("#world").append(powerCluster);
  const mirrorCluster=document.createElement("section");mirrorCluster.className="mirror-cluster";
  const mirrorTitlePos=[-1420,-480,430],mirrorImagePos=[-1030,-480,430],mirrorNotePositions=[[-1420,-170,430],[-1030,-170,430],[-1225,140,430]];
  const mirrorTitle=document.createElement("div");mirrorTitle.className="mirror-title";mirrorTitle.style.transform=`translate3d(${mirrorTitlePos[0]}px,${mirrorTitlePos[1]}px,${mirrorTitlePos[2]}px)`;mirrorTitle.innerHTML="<small>DEVICE / 006</small><strong>MIRROR BOX</strong><span>INVISIBLE FORCES MADE VISIBLE</span>";mirrorCluster.append(mirrorTitle);
  const mirrorImage=document.createElement("button");mirrorImage.className="mirror-device-card";mirrorImage.dataset.src="assets/mirror-box-device.png";mirrorImage.dataset.title="Mirror Box";mirrorImage.style.transform=`translate3d(${mirrorImagePos[0]}px,${mirrorImagePos[1]}px,${mirrorImagePos[2]}px)`;mirrorImage.innerHTML='<img src="assets/mirror-box-device.png" alt="Mirror box device with magnetic topographies"><span><small>ANALOG DEVICE</small><strong>VIEW DEVICE &nearr;</strong></span>';mirrorCluster.append(mirrorImage);
  const mirrorNotes=[
    ["MAGNETIC FIELD","A hidden force moves beneath the surface."],
    ["FERROMAGNETIC POWDER","Matter registers force as landscape."],
    ["TOPOGRAPHY RESPONSE","The invisible becomes readable through effects."]
  ];
  mirrorNotes.forEach((item,index)=>{
    const [x,y,z]=mirrorNotePositions[index];
    const note=document.createElement("article");note.className="mirror-note";note.style.transform=`translate3d(${x}px,${y}px,${z}px)`;note.innerHTML=`<small>OBSERVATION / 0${index+1}</small><strong>${item[0]}</strong><p>${item[1]}</p>`;mirrorCluster.append(note);
    const trail=document.createElement("div");trail.className="mirror-trail";for(let step=1;step<=7;step++){const frame=document.createElement("i"),t=step/7;frame.style.transform=`translate3d(${mirrorTitlePos[0]+(x-mirrorTitlePos[0])*t-160}px,${mirrorTitlePos[1]+(y-mirrorTitlePos[1])*t-100}px,${mirrorTitlePos[2]+(z-mirrorTitlePos[2])*t}px) scale(${.18+.82*t})`;trail.append(frame)}mirrorCluster.append(trail);
  });
  const mirrorImageTrail=document.createElement("div");mirrorImageTrail.className="mirror-image-trail";
  for(let step=1;step<=9;step++){const frame=document.createElement("i"),t=step/9;frame.style.transform=`translate3d(${mirrorTitlePos[0]+(mirrorImagePos[0]-mirrorTitlePos[0])*t-160}px,${mirrorTitlePos[1]+(mirrorImagePos[1]-mirrorTitlePos[1])*t-100}px,${mirrorTitlePos[2]+(mirrorImagePos[2]-mirrorTitlePos[2])*t}px) scale(${.18+.82*t})`;mirrorImageTrail.append(frame)}
  mirrorCluster.append(mirrorImageTrail);document.querySelector("#world").append(mirrorCluster);
  const referencesCluster=document.createElement("section");referencesCluster.className="references-cluster";
  const references=[
    {title:"The Stack",author:"Benjamin H. Bratton",src:"assets/the-stack.png",pos:[-280,-110,-520]}
  ];
  const referencesTitle=document.createElement("div");referencesTitle.className="references-title";referencesTitle.style.transform="translate3d(-280px,-520px,-710px)";referencesTitle.innerHTML="<small>FOUNDATION / 007</small><strong>THEORETICAL GROUND</strong><span>CORE REFERENCE</span>";referencesCluster.append(referencesTitle);
  references.forEach((item,index)=>{
    const card=document.createElement("button");card.className=`reference-index-card ${item.wide?"wide":""}`;card.style.transform=`translate3d(${item.pos[0]}px,${item.pos[1]}px,${item.pos[2]}px)`;card.dataset.src=item.src;card.dataset.title=item.title;card.dataset.author=item.author;card.innerHTML=`<img src="${item.src}" alt="${item.title}"><span><small>REF / ${String(index+1).padStart(2,"0")}</small><strong>${item.title}</strong><em>${item.author}</em></span>`;referencesCluster.append(card);
    const trail=document.createElement("div");trail.className="reference-index-trail";for(let step=1;step<=7;step++){const frame=document.createElement("i"),t=step/7;frame.style.transform=`translate3d(${20+(item.pos[0]-20)*t-80}px,${-270+(item.pos[1]+270)*t-60}px,${-710+(item.pos[2]+710)*t}px) scale(${.18+.82*t})`;trail.append(frame)}referencesCluster.append(trail);
  });
  document.querySelector("#world").append(referencesCluster);
  const viewport=document.querySelector("#viewport"),world=document.querySelector("#world"),canvas=document.querySelector("#space"),ctx=canvas.getContext("2d"),coords=document.querySelector("#coords"),intro=document.querySelector(".intro"),detail=document.querySelector("#detail"),about=document.querySelector("#about"),nav=[...document.querySelectorAll("[data-view]")];
  const maxZoom=1.95;
  const activeZoomStep=.18;
  const state={rx:-4,ry:-6,z:.52,ox:0,oy:0,trx:-4,try:-6,tz:.52,tox:0,toy:0,drag:false,x:0,y:0,moved:false};
  const views={
    a:{rx:-2,ry:-3,z:1.55,x:0,y:0},
    b:{rx:4,ry:-8,z:.92,x:-420,y:-510},
    c:{rx:4,ry:8,z:.98,x:900,y:-390},
    d:{rx:-4,ry:5,z:1.32,x:840,y:300},
    e:{rx:-5,ry:-7,z:.92,x:-810,y:300},
    f:{rx:-3,ry:7,z:.98,x:1225,y:175},
    g:{rx:-22,ry:-5,z:1.02,x:300,y:430}
  };
  function resize(){const d=Math.min(devicePixelRatio,2);canvas.width=innerWidth*d;canvas.height=innerHeight*d;ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,innerWidth,innerHeight);ctx.fillStyle="#0000001c";const g=44;for(let y=70;y<innerHeight;y+=g)for(let x=20;x<innerWidth;x+=g){ctx.fillRect(x,y,.7,.7)}}
  function render(){state.rx+=(state.trx-state.rx)*.085;state.ry+=(state.try-state.ry)*.085;state.z+=(state.tz-state.z)*.085;state.ox+=(state.tox-state.ox)*.085;state.oy+=(state.toy-state.oy)*.085;world.style.transform=`translate3d(${state.ox}px,${state.oy}px,0) scale(${state.z}) rotateX(${state.rx}deg) rotateY(${state.ry}deg)`;coords.textContent=`ORBIT / ${String(Math.round(state.ry+360)%360).padStart(3,"0")} DEG   TILT / ${String(Math.abs(Math.round(state.rx))).padStart(3,"0")} DEG`;requestAnimationFrame(render)}
  viewport.onpointerdown=e=>{if(e.target.closest("button,a,aside"))return;state.drag=true;state.moved=false;state.x=e.clientX;state.y=e.clientY;viewport.classList.add("drag");viewport.setPointerCapture?.(e.pointerId)};
  viewport.onpointermove=e=>{if(!state.drag)return;const dx=e.clientX-state.x,dy=e.clientY-state.y;if(Math.abs(dx)+Math.abs(dy)>2)state.moved=true;state.try+=dx*.13;state.trx=Math.max(-55,Math.min(55,state.trx-dy*.1));state.x=e.clientX;state.y=e.clientY;intro.style.opacity=".12";nav.forEach(b=>b.classList.remove("active"))};
  viewport.onpointerup=viewport.onpointercancel=()=>{state.drag=false;viewport.classList.remove("drag")};
  viewport.onwheel=e=>{e.preventDefault();state.tz=Math.max(.42,Math.min(maxZoom,state.tz-e.deltaY*.0008))};
  nav.forEach(b=>b.onclick=()=>{const view=views[b.dataset.view],wasActive=b.classList.contains("active");state.trx=view.rx;state.try=view.ry;state.tz=Math.min(maxZoom,view.z+(wasActive?activeZoomStep:0));state.tox=view.x;state.toy=view.y;intro.style.opacity=".12";detail.classList.remove("open");about.classList.remove("open");nav.forEach(x=>x.classList.toggle("active",x===b))});
  const placeholder='<p>Spazio riservato al contenuto. Qui potremo inserire testo, immagini, video, documenti o collegamenti relativi a ciascun materiale.</p>';
  const channelChasers=`
    <div class="reference-hero"><small>THE FAIRLY ODDPARENTS / CHANNEL CHASERS</small><strong>THE SCREEN BECOMES A SPACE.</strong><small>REFERENCE / AUDIOVISUAL MEDIA</small></div>
    <ol class="reason-list">
      <li><h3>The screen becomes a space</h3><p>Timmy does not simply watch television; he enters it. The screen ceases to function as a surface of representation and instead becomes an inhabitable environment.</p></li>
      <li><h3>Each channel is a distinct territory</h3><p>Rather than a continuous medium, television is presented as an archipelago of heterogeneous worlds. This mirrors the Internet as a collection of differentiated territories rather than a homogeneous network.</p></li>
      <li><h3>Navigation instead of viewing</h3><p>The remote control functions less as a device for changing programs than as an instrument of navigation. It enables movement between worlds rather than passive consumption.</p></li>
      <li><h3>The environment transforms the subject</h3><p>Whenever Timmy enters a different channel, his body changes with it. The environment determines the form of the subject.</p><p class="research-question">How do different media infrastructures reshape perception, embodiment, and agency?</p><p>The traveler is not external to the territory; the territory actively transforms the traveler.</p></li>
      <li><h3>Media as geomorphology</h3><p>Television is not represented as a linear sequence of programs but as a landscape made of adjacent media ecologies. Moving through it resembles crossing geological formations rather than browsing information.</p></li>
    </ol>
    <div class="reference-meta"><span>CLUSTER / CHANNEL CHASERS</span><span>STATUS / ACTIVE REFERENCE</span></div>`;
  document.querySelectorAll(".card").forEach(card=>card.onclick=()=>{if(state.moved)return;const isChannel=card.dataset.title==="Channel Chasers";detail.querySelector(".code").textContent=`${card.dataset.code} / ${isChannel?"REFERENCE":"MATERIAL"}`;detail.querySelector("h2").textContent=card.dataset.title;detail.querySelector(".detail-content").innerHTML=isChannel?channelChasers:placeholder;detail.querySelector(".detail-status").textContent=isChannel?"MORPHOLOGY / MEDIA TERRITORY":"CONTENT / TO BE ADDED";detail.classList.toggle("research",isChannel);detail.classList.add("open");about.classList.remove("open")});
  document.querySelectorAll(".concept-card").forEach((card,index)=>card.onclick=()=>{if(state.moved)return;detail.querySelector(".code").textContent=`A-01.${index+1} / KEY CONCEPT`;detail.querySelector("h2").textContent=card.dataset.title;detail.querySelector(".detail-content").innerHTML=`<div class="concept-detail-index">CHANNEL CHASERS / CONCEPT 0${index+1}</div><p class="concept-detail-copy">${card.dataset.description}</p>`;detail.querySelector(".detail-status").textContent="RELATED REFERENCE / CHANNEL CHASERS";detail.classList.remove("research");detail.classList.add("open");about.classList.remove("open")});
  const datasetItems=["Submarine cables","Landing stations","Data centers","Internet Exchange Points (IXPs)","Server farms","Cell towers","Satellites","Fiber-optic networks","Routers and switching facilities","Network Operation Centers (NOCs)","Edge computing facilities","Cloud regions","Power infrastructure and electrical grids supporting data centers","Cooling systems","Cable conduits and underground ducts","Warehouses for cloud infrastructure","Energy landscapes","Water consumption","Mining sites for rare-earth minerals","Manufacturing plants for chips and hardware","Electronic waste (e-waste)","Logistics infrastructures"];
  datasetBox.onclick=()=>{detail.querySelector(".code").textContent="PHYSICAL MANIFESTATION / DATASET";detail.querySelector("h2").textContent="Dataset";detail.querySelector(".detail-content").innerHTML=`<p class="dataset-intro">Physical and ecological layers through which the Internet manifests.</p><ol class="dataset-list">${datasetItems.map((item,index)=>`<li><span>${String(index+1).padStart(2,"0")}</span>${item}</li>`).join("")}</ol>`;detail.querySelector(".detail-status").textContent="DATASET / 22 LAYERS";detail.classList.add("research","open");about.classList.remove("open")};
  ecologyBox.onclick=()=>{detail.querySelector(".code").textContent="PHYSICAL MANIFESTATION / ECOLOGY";detail.querySelector("h2").textContent="Everything is interconnected";detail.querySelector(".detail-content").innerHTML='<div class="ecology-questions"><p>These layers intersect with ecological systems — but how?</p><p>What landscapes does the Internet produce?</p><p>How does the Internet reconfigure ecological landscapes?</p><p>How does the Internet inscribe itself onto the Earth’s ecosystems?</p><p>What ecological footprint does the Internet leave behind?</p></div>';detail.querySelector(".detail-status").textContent="ECOLOGICAL ENTANGLEMENTS / OPEN QUESTIONS";detail.classList.add("research","open");about.classList.remove("open")};
  rhizomeBox.onclick=()=>{detail.querySelector(".code").textContent="REFERENCE / DELEUZE + GUATTARI";detail.querySelector("h2").textContent="Rhizome";detail.querySelector(".detail-content").innerHTML='<img class="detail-book" src="assets/thousand-plateaus.png" alt="A Thousand Plateaus"><p class="concept-detail-copy">A horizontal and non-hierarchical model. The Internet can be read as a multiplicity of interconnected physical, ecological, and informational layers without a single organizing center.</p>';detail.querySelector(".detail-status").textContent="A THOUSAND PLATEAUS / CONCEPTUAL REFERENCE";detail.classList.add("research","open");about.classList.remove("open")};
  document.querySelectorAll(".mapping-panel.image").forEach(panel=>panel.onclick=()=>{detail.querySelector(".code").textContent="MAPPING / ECOSYSTEM REPRESENTATION";detail.querySelector("h2").textContent=panel.dataset.title;detail.querySelector(".detail-content").innerHTML=`<img class="detail-mapping-image" src="${panel.dataset.src}" alt="${panel.dataset.title}"><p>Representation operates here as an analytical instrument: relationships, temporal processes, and ecological variables become visible through spatial organization.</p>`;detail.querySelector(".detail-status").textContent="VISUAL METHOD / MAPPING";detail.classList.add("research","open");about.classList.remove("open")});
  document.querySelectorAll(".land-panel.image").forEach(panel=>panel.onclick=()=>{detail.querySelector(".code").textContent="GENERATIVE LANDSCAPE / IMAGE";detail.querySelector("h2").textContent=panel.dataset.title;detail.querySelector(".detail-content").innerHTML=`<img class="detail-land-image" src="${panel.dataset.src}" alt="${panel.dataset.title}"><p class="reference-author">${panel.dataset.credit||""}</p>`;detail.querySelector(".detail-status").textContent="IMAGE / OPEN VIEW";detail.classList.add("research","open");about.classList.remove("open")});
  powerImage.onclick=()=>{detail.querySelector(".code").textContent="POWER / SYSTEMS / INFRASTRUCTURES";detail.querySelector("h2").textContent="Calculating Empires";detail.querySelector(".detail-content").innerHTML='<img class="detail-power-image" src="assets/calculating-empires.png" alt="Calculating Empires"><p class="concept-detail-copy">A visual genealogy of technology and power. The map connects communication, computation, classification, infrastructure, automation, and control across historical time.</p>';detail.querySelector(".detail-status").textContent="KATE CRAWFORD + VLADAN JOLER / 2023";detail.classList.add("research","open");about.classList.remove("open")};
  mirrorImage.onclick=()=>{detail.querySelector(".code").textContent="DEVICE / MIRROR BOX";detail.querySelector("h2").textContent="Mirror Box";detail.querySelector(".detail-content").innerHTML='<img class="detail-mirror-image" src="assets/mirror-box-device.png" alt="Mirror box device"><p class="concept-detail-copy">The mirror box is a device that reveals invisible forces. A magnetic field moves beneath the surface, shaping ferromagnetic powder into shifting topographies.</p>';detail.querySelector(".detail-status").textContent="ANALOG INTERACTION / FORCE TOPOGRAPHY";detail.classList.add("research","open");about.classList.remove("open")};
  document.querySelectorAll(".reference-index-card").forEach(card=>card.onclick=()=>{detail.querySelector(".code").textContent="ARCHIVE / REFERENCE";detail.querySelector("h2").textContent=card.dataset.title;detail.querySelector(".detail-content").innerHTML=`<img class="detail-reference-image" src="${card.dataset.src}" alt="${card.dataset.title}"><p class="reference-author">${card.dataset.author}</p>`;detail.querySelector(".detail-status").textContent="CONCEPTUAL + VISUAL SOURCE";detail.classList.add("research","open");about.classList.remove("open")});
  detail.querySelector(".close").onclick=()=>detail.classList.remove("open");
  document.querySelector("#aboutBtn").onclick=()=>{about.classList.toggle("open");detail.classList.remove("open")};
  document.querySelector(".logo").onclick=e=>{e.preventDefault();detail.querySelector(".code").textContent="KHORA / NAME / CONCEPT";detail.querySelector("h2").textContent="Why Khōra?";detail.querySelector(".detail-content").innerHTML='<div class="why-khora"><p>I chose the name <em>Khōra</em> because it describes the kind of space I am interested in investigating.</p><p>In Plato’s <em>Timaeus</em>, khōra is neither a form nor an object, but a receptacle: a generative field where things can emerge before taking shape.</p><p>I find this concept particularly relevant to the Internet, not as a network or an infrastructure, but as a latent territory whose morphology is continuously generated by the forces acting upon it.</p></div>';detail.querySelector(".detail-status").textContent="GENERATIVE FIELD / LATENT TERRITORY";detail.classList.add("research","open");about.classList.remove("open")};
  onkeydown=e=>{if(e.key==="ArrowLeft")state.try-=8;if(e.key==="ArrowRight")state.try+=8;if(e.key==="ArrowUp")state.trx+=6;if(e.key==="ArrowDown")state.trx-=6;if(e.key==="+"||e.key==="=")state.tz=Math.min(maxZoom,state.tz+.1);if(e.key==="-")state.tz=Math.max(.42,state.tz-.1);if(e.key==="Escape"){detail.classList.remove("open");about.classList.remove("open")}};
  onresize=resize;resize();render();
})();
