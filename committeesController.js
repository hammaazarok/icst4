const comitteContainer = document.getElementById('committees-list');

const data = [
  {
    img: 'comitee1.png',
    name: 'Emsaieb Geepalla',
    title: 'Dean of Engineering Science and Technology Faculty',
    intro: 'Assistant Professor at School of Electrical and Computer Engineering Sebha University',
  },
  {
    img: 'comitee2.png',
    name: 'Masoud Alragig',
    title: 'President of Sebha University',
    intro: 'aculty member, Department of Chemistry, Faculty of Science, Sebha University ',
  },
  {
    img: 'comitee3.png',
    name: 'Mohamedb Erhayem',
    title: 'Faculty of Science at Sebha University ',
    intro: 'Ph.D. in Chemistry at Chemistry Department, Florida Institute of Technology, FL, USA 2013 ',
  },
  {
    img: 'comitee4.png',
    name: 'Almahdi Alshareef     ',
    title: 'computer science Faculty of Information Technology University Of Sebha',
    intro: 'PhD in Computer Science Faculty of Science and Information Technology  National University Malaysia',
  },
  {
    img: 'comitee5.png',
    name: 'Nassir Abuhamoud',
    title: 'Assistant Professor of telecommunication systems and Control, Designer',
    intro: 'Ph.D. Khmelnitsky National University, Ukraine, 2011.',
  },
  {
    img: 'comitee6.png',
    name: 'Abdul-Qader Abu-Ghararah',
    title: 'Dean of the College of Education Ubari',
    intro: 'PhD in Educational Psychology from Nottingham Trent University',
  },
  {
    img: 'comitee7.png',
    name: 'Ibrahim Alsonosi Nasir',
    title: 'Head of Sebha University Training Center',
    intro: 'PhD in Embedded systems engineering',
  },
  {
    img: 'comitee8.png',
    name: 'Salwa Ali',
    title: 'Head of Network and Communication Department',
    intro: 'Msc Network security with Distinction',
  },
];

function loadCommittees() {
  let Html = '';

  for (let Index = 0; Index < data.length; Index += 1) {
    const html = `<li class="committees-item remove-decoration">
    <div class="committees-item-image">
        <img src="assets/${data[Index].img}" alt="comitee personal picture">
    </div>
    <div class="committees-item-text">
        <p class="color1 cocogoose-font">${data[Index].name}</p>
        <p class="color2 lato-font">${data[Index].title}</p>
        <div class="committees-line2"></div>
        <p class="color1 lato-font">${data[Index].intro}</p>
    </div>
</li>`;
    Html += html;
  }
  comitteContainer.innerHTML = Html;
}

loadCommittees();