var c=10;
var c2=10;
var time=0;
var c3=10;
var value=0;
var c1=0;
var c7=10;
var c8=700;
var c9=710;
var c10=710;
var c11=700;
var c12=10;
var c13=10;
let extraCanvas;
let extraCanvas1;
let extraCanvas2;
let extraCanvas3;
let extraCanvas4;
let extraCanvas5;
let extraCanvas6;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
var c4=10;
var c5=10;
var c6=10;
var fade = 0;
var fadeSpeed = 2.0;
var l1=10;
var l2=10;
var l3=10;
var l4=10;
var l5=10;
var l6=10;
let network1;
let network2;
let network3;
let network4;
let bg;
var n1=10;
var n2=10;
var n3=10;
var n4=10;
var n5=10;
var n6=10;
var bg1;
var gif_createImg;
 // THESE ARE THE VARIABLES FOR DATALINK LAYER
var d1=10;
var d2=10;
var d3=10;
var d4=10;
var d5=10;
var d6=10;
//MY VARIABLES ENDS

function setup() {
     createCanvas(1350,800);
   
    button= createButton("Application Layer")
    button.size(300,40);
    button.position(950,150);
    button.style('font-size','30px','color','#ff10000','font-style','Calibri')
    button.style('background','#0080FF')
    textStyle(BOLD);
    button.mousePressed(circle1);
    
    
    button1= createButton("Presentation Layer");
    button1.size(300,40);
    button1.position(950,200);
    button1.style('font-size','30px','color','#ff10000')
    button1.style('background','#0080FF')
    button1.mousePressed(circle2);
    
     button2= createButton("Session Layer");
    button2.size(300,40);
    button2.position(950,250);
    button2.style('font-size','30px','color','#ff10000')
    button2.style('background','#0080FF')
    button2.mousePressed(circle3);
    
    button3= createButton("Transport Layer");
    button3.size(300,40);
    button3.position(950,300);
    button3.style('font-size','30px','color','#ff10000')
    button3.style('background','#0080FF')
    button3.mousePressed(circle4);
    
    button4= createButton("Network Layer");
    button4.size(300,40);
    button4.position(950,350);
    button4.style('font-size','30px','color','#ff10000')
    button4.style('background','#0080FF')
    button4.mousePressed(circle5);
    
    
    button5= createButton("DataLink Layer");
    button5.size(300,40);
    button5.position(950,400);
    button5.style('font-size','30px','color','#ff10000')
    button5.style('background','#0080FF')
    button5.mousePressed(circle6);
    
    
    button6= createButton("Physical Layer");
    button6.size(300,40);
    button6.position(950,450);
    button6.style('font-size','30px','color','#ff10000')
    button6.style('background','#0080FF')
    button6.mousePressed(circle7);
    
    
   extraCanvas=createGraphics(800,620); 
    extraCanvas.background(45,11,112);
        extraCanvas1=createGraphics(800,600); 
    extraCanvas1.background(34,0,51);
    
//    extraCanvas2=createGraphics(800,600); 
//    extraCanvas2.background(34,0,51);
//    
//    extraCanvas3=createGraphics(800,600); 
//    extraCanvas3.background(25,0,255);
//   
    
     extraCanvas2=createGraphics(800,600); 
    extraCanvas2.background(26,0,51);
    
    extraCanvas3=createGraphics(800,600); 
    extraCanvas3.background(61,0,0);
    
    extraCanvas4=createGraphics(800,600); 
    extraCanvas4.background(77,0,77);
    
    extraCanvas5=createGraphics(800,600); 
    extraCanvas5.background(77,0,77);
    
    extraCanvas6=createGraphics(800,600); 
    extraCanvas6.background(77,0,13);
    img11 = loadImage('osi2.png'); 
    img = loadImage('pc1.jpg');
    img2 = loadImage('pc2.jpg');
    img3 = loadImage('protocols.png');
    img4 = loadImage('ftp.jpg');
    img5 = loadImage('email.png');
    img6 = loadImage('websurfing.jpg');
    img7 = loadImage('virtualterminals.jpg');
    img8 = loadImage('application.png');
     img9 = loadImage('translation.png');
    img10 = loadImage('redarrow.png');
    img12= loadImage('PhysicalLayer.jpg');
    simg1 = loadImage('setupsession.jpg');
    simg2 = loadImage('maintainsession.jpg');
    simg3 = loadImage('session.png');
    simg4 = loadImage('disconnectsession.png');
    simg5 = loadImage('transport2.png');
    simg6 = loadImage('tcp.png');
    simg7 = loadImage('udp3.jpeg');
    
    // Network layer images
network1 = loadImage('network1.png');
network2 = loadImage('network2.jpg');
network3 = loadImage('network3.png');
network4 = loadImage('network4.png');
//DataLink Images
data1 = loadImage('datalink1.png');
data2 = loadImage('datalink2.jpg');
data3 = loadImage('datalink3.png');
data4 = loadImage('datalink4.jpg');



}

function draw() {
  // put drawing code here
     background(0,0,0);
    // image(gif_loadImg, 50, 50);
 //gif_loadImg = loadImage("7Sv5.gif");
  //gif_createImg = createImg("7Sv5.gif");
  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  //gif_createImg.position(50, 350);
        //fill(255, 204, 100,50);
        // fill(202,200,210,50);
    image(img11, 135, 120,500, 490);
    textSize(50);
        fill(255, 255, 255);
    
    //fill(0, 102, 153, 51);
//text('word', 110+c, 190+c);
   
text('OSI(Open System Interconnection )', 10+c, 40);
    c=c+1
        if(c==1400){
            c=0;
    }
    
if(c1===1){
    image(extraCanvas,0,0);
    textSize(40);
        fill(255, 255, 255);
    
    //fill(0, 102, 153, 51);
//text('word', 110+c, 190+c);
    if(c2<=180){
        text('Application Layer', 10+c2,50);
        c2++;
    }
    else
    {
      text('Application Layer', 190,50);  
    }
        
 
   
        let s = 'It is the top most layer of OSI Model. Manipulation of data(information) in various ways is done in this layer which enables user or software to get access to the network. Some services provided by this layer includes: E-Mail, transferring files, distributing the results to user, directory services, network resources, etc.';
     textSize(15);
fill(255);
   
        text(s, 10, 100, 700, 800);
    if(c3<=60){
       image(img3, c3+10, 190,img.width / 3, img.height / 3);
        c3++;
    }
    else
    {
      image(img3, 70, 190,img.width / 3, img.height / 3); 
        
    }
    image(img8, 370, 190,img.width/2 , img.height/3 )
    arc(70, 330, 70, 70, PI, PI + QUARTER_PI);
    textSize(15);
        fill(255, 255, 255);
   text('Application Layer Protocols', 60,350); 
    text('File Transfer', 180,370); 
      
     if(c4<=160){
       image(img4, c4+10, 380,img.width / 4, img.height / 4);
        c4++;
    }
    else
    {
      image(img4, 170, 380,img.width / 4, img.height / 4); 
        
    }
    text('FTP', 210,500);
    
    
   text('Email', 330,370); 
      
     if(c4<=290){
       image(img5, c4+10, 380,img.width / 4, img.height / 4);
        c4++;
    }
    else
    {
      image(img5, 300, 380,img.width / 4, img.height / 4); 
        
    }
    text('SMTP', 330,500); 
   
    
     text('Web Surfing', 445,370); 
      
     if(c5<=420){
       image(img6, c5+10, 380,img.width / 4, img.height / 4);
        c5++;
    }
    else
    {
      image(img6, 430, 380,img.width / 4, img.height / 4); 
        
    }
    text('HTTS', 460,500); 
   
     text('Virtual Terminals', 560,370); 
      
     if(c5<=550){
       image(img7, c5+10, 380,img.width / 4, img.height / 4);
        c5++;
    }
    else
    {
      image(img7, 560, 380,img.width / 4, img.height / 4); 
      //image(img7, 560, 380,img.width / 4, img.height / 4); 
        
    }
    text('Telnet', 590,500); 
   
    
       
    
} 
    else if(c1===2){
       
        image(extraCanvas1,0,0);
        textSize(40);
        fill(255, 255, 255);
    
    //fill(0, 102, 153, 51);
//text('word', 110+c, 190+c);
    if(c7<=180){
        text('Presentation Layer', 10+c7,50);
        c7++;
    }
    else
    {
      text('Presentation Layer', 190,50);  
    }
        
 
   
        let s = 'The primary goal of this layer is to take care of the syntax and semantics of the information exchanged between two communicating systems. Presentation layer takes care that the data is sent in such a way that the receiver will understand the information(data) and will be able to use the data. Languages(syntax) can be different of the two communicating systems. Under this condition presentation layer plays a role translator.';
     textSize(15);
fill(255);
   
        text(s, 10, 100, 700, 800);
         textSize(20);
    text('Functions of Presentation layer', 10, 210, 700, 800); 
        
       if(c8>=280){
        text('Translation', 10,c8-10);
        c8--;
    }
    else
    {
      text('Translation', 10,260);  
    } 
        
        
        if(time<=700){
            if(c9>=280){
                image(img9, 10, c9-10,img.width/1 , img.height/2 )
        //text('Translation', 10,c8-10);
        c9--;
    }
    else
    {
        image(img9, 10, 280,img.width/1 , img.height/2 )
      //text('Translation', 10,260);  
    } 
            
            time++;
        }
        else{
               image(img9, 10, 880,img.width/1 , img.height/2 )  
             let s = 'Before being transmitted, information in the form of characters and numbers should be changed to bit streams. The presentation layer is responsible for interoperability between encoding methods as different computers use different encoding methods.';
     textSize(15);
fill(255);
   
        text(s, 10, 280, 700, 800);
            
        }
        if(time >700){
             textSize(20);
             if(c10>=380){
        text('Encryption', 10,c10-10);
        c10--;
    }
    else
    {
      text('Encryption', 10,370); 
        
    } 
            text('1010110 ---> 1101101', 10,400); 
            
            
           textSize(20);
             if(c11>=430){
        text('Data Compression', 10,c11-20);
        c11--;
    }
    else
    {
      text('Data Compression', 10,430); 
        let s = 'It carries out data compression to reduce the bandwidth of the data to be transmitted. The primary role of Data compression is to reduce the number of bits to be 0transmitted. It is important in transmitting multimedia such as audio, video, text etc.';
     textSize(15);
fill(255);
   
        text(s, 10, 450, 700, 800);
        
    }   
            
        }
      
        
    //await sleep(2000);
        
    
    }
    
    else if(c1===3)
    {
        //image(extraCanvas2,0,0);
        image(extraCanvas2,0,0);
        textSize(40);
        fill(255);
        if(l1<=180)
        {
            text('Session  Layer', 10+l1,50);
            l1++;
        }
        else
        {
            text('Session Layer', 190,50);  
        }
        
        let s1='In the seven-layer OSI model of computer networking, the session layer is layer 5.The session layer provides the mechanism for opening, closing and managing a session between end-user application processes, i.e., a semi-permanent dialogue. Communication sessions consist of requests and responses that occur between applications. Session-layer services are commonly used in application environments that make use of remote procedure calls (RPCs).'
        textSize(15);
        fill(255);
        text(s1, 10, 100, 700, 700);
        
        if(l2<=60)
        {
            image(simg3, l2+10, 190,img.width / 3, img.height / 3);
            l2++;
        }
        else
        {
            image(simg3, 70, 190,img.width / 3, img.height / 3); 
        }
        //arc(70, 330, 70, 70, PI, PI + QUARTER_PI);
        textSize(15);
        fill(255);
        text('Session Layer Functions', 60,350); 
        text('Setting Up A Session', 180,370);
        text('Check User Credentials', 150,500);
        if(l3<=160)
        {
            image(simg1, l3+20, 380,img.width / 4, img.height / 4);
            l3++;
        }
        else
        {
            image(simg1, 170, 380,img.width / 4, img.height / 4); 
        }
        text('Transfer The Data', 350,500);
        text('Maintaining A Session', 350,370); 
        if(l4<=290)
        {
            image(simg2, l4+10, 380,img.width / 4, img.height / 4);
            l4++;
        }
        else
        {
            image(simg2, 350, 380,img.width / 4, img.height / 4); 
        }
        text('Due To Other Party Disconnected', 530,500); 
        text('Tearing The Session', 550,370); 
        if(l5<=420)
        {
            image(simg4, l5+10, 380,img.width / 4, img.height / 4);
            l5++;
        }
        else
        {
            image(simg4, 550, 380,img.width / 4, img.height / 4); 
        }
    }
     else if(c1===4)
     {
        //image(extraCanvas3,0,0);
         image(extraCanvas3,0,0);
    textSize(40);
    fill(255);
    if(l1<=180)
    {
        text('Transport Layer', 10+l1,50);
        l1++;
    }
    else
    {
        text('Transport Layer', 190,50);  
    }
    let s1='In computer networking, the transport layer is a conceptual division of methods in the layered architecture of protocols in the network stack in the Internet protocol suite and the OSI model. The protocols of this layer provide host-to-host communication services for applications.'
    textSize(15);
    fill(255);
    text(s1, 10, 100, 700, 700);
    if(l2<=60)
    {
        image(simg5, l2+10, 190,simg5.width/2 , simg5.height/2 );
        l2++;
    }
    else
    {
        image(simg5, 70, 190,simg5.width / 2, simg5.height / 2); 
    }
    textSize(15);
    fill(255);
    text('Transport Layer Protocols', 155,370); 
    text('TCP', 190,600);
    //text('TCP (Transmission Control Protocol) is a standard that defines how to establish and maintain a network conversation through which application programs can exchange data. TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other', 150,500);
    if(l3<=160)
    {
        image(simg6, l3+20, 380,img.width / 2, img.height / 2);
        l3++;
    }
        else
        {
            image(simg6, 120, 380,img.width / 2, img.height / 2); 
        }
        text('', 350,500);
        text('UDP',420 ,600); 
        if(l4<=290)
        {
            image(simg7, l4+10, 380,simg7.width/2 , (simg7.height/2)-10 );
            l4++;
        }
        else
        {
            image(simg7, 350, 380,simg7.width/2, (simg7.height/2)-10 ); 
        }
//        text('Due To Other Party Disconnected', 530,500); 
//        text('Tearing The Session', 550,370); 
//        if(l5<=420)
//        {
//            image(simg4, l5+10, 380,img.width / 4, img.height / 4);
//            l5++;
//        }
//        else
//        {
//            image(simg4, 550, 380,img.width / 4, img.height / 4); 
//        }


    } else if(c1===5){
        //image(extraCanvas4,0,0);
         image(extraCanvas4,0,0);
        // image(extraCanvas2,0,0);
        textSize(40);
        fill(255);  
        if(n1<=180)
        {
            text('Network  Layer', 10+n1,50);
            n1++;
        }
        else
        {
            text('Network Layer', 190,50);  
        }
        
       let s1= 'In Network layer, a router is used to forward the packets. Every router has a forwarding table. A router forwards a packet by examining a packets header field and then using the header field value to index into the forwarding table. The value stored in the forwarding table corresponding to the header field value indicates the routers outgoing interface link to which the packet is to be forwarded.';     
          textSize(15);
        fill(255);
        text(s1, 10, 100, 700, 700);
        
        if(n2<=60)
        {
            image(network1, n2+10, 190,img.width / 3, img.height / 3);
            n2++;
        }
        else
        {
            image(network1, 70, 190,img.width / 3, img.height / 3); 
        }
        //arc(70, 330, 70, 70, PI, PI + QUARTER_PI);
        textSize(15);
        fill(255);
        text('Network Layer Functions', 60,350); 
        text('Setting Up A Network Layer', 110,370);
        text('Arp Request ', 150,500);
        if(n3<=160)
        {
            image(network2, n3+20, 380,img.width / 4, img.height / 4);
            n3++;
        }

        else
        {
            image(network2, 170, 380,img.width / 4, img.height / 4); 
        }
        text('Default Gateway', 350,500);
        text('Gateway orientation ', 350,370); 
        if(n4<=290)
        {
            image(network3, n4+10, 380,img.width / 4, img.height / 4);
            n4++;
        }
        else
        {
            image(network3, 350, 380,img.width / 4, img.height / 4); 
        }
        text('Packet transfer', 530,500); 
        text('Routing Algorithm', 550,370); 
        if(n5<=420)
        {
            image(network4, n5+10, 380,img.width / 4, img.height / 4);
            n5++;
        }
        else
        {
            image(network4, 550, 380,img.width / 4, img.height / 4); 
        }
    }
     else if(c1===6){
        //image(extraCanvas5,0,0);
         // image(extraCanvas5,0,0);

    
        image(extraCanvas4,0,0);
        // image(extraCanvas2,0,0);
        textSize(40);
        fill(255);  
        if(d1<=180)
        {
            text('DataLink  Layer', 10+d1,50);
            d1++;
        }
        else
        {
            text('DataLink Layer', 190,50);  
        }
        
       let s1= 'Data link layer works between two hosts which are directly connected in some sense. This direct connection could be point to point or broadcast. Systems on broadcast network are said to be on same link. The work of data link layer tends to get more complex when it is dealing with multiple hosts on single collision domain.In Network layer, a router is used to forward the packets. Every router has a forwarding table. A router forwards a packet by examining a packets header field and then using the header field value to index into the forwarding table.'; 
                textSize(15);
        fill(255);
        text(s1, 10, 100, 700, 700);
        
        if(d2<=60)
        {
            image(data1, d2+10, 220,data1.width / 3, data1.height / 3);
            d2++;
        }
        else
        {
            image(data1, 70, 220,data1.width / 3, data1.height / 3); 
        }
        //arc(70, 330, 70, 70, PI, PI + QUARTER_PI);
        textSize(15);
        fill(255);
        text('Datalink  Layer Functions', 85,350); 
        text('Setting Up A Frames in datalink', 60,370);
        text('  Position of the data link layer', 110,545);
        if(d3<=160)
        {
            image(data2, d3+20, 380,data2.width / 3, data2.height / 3);
            d3++;
        }

        else
        {
            image(data2, 110, 380,data2.width / 3, data2.height / 3); 
        }
        //text('Data link  layer services', 350,545);
         /*
        text('Maintaining A frames of Session', 350,370); 
        if(d4<=290)
        {
            image(data3, n4+10, 380,data3.width / 3, data3.height / 3);
            d4++;
        }
        else
        {
            image(data3, 350, 380,data3.width / 3, data3.height / 3); 
        }
        text('Fuctionality oriented services', 530,545); 
        text('Multiple Acess resolution', 590,370); 
        if(d5<=420)
        {
            image(data4, n5+10, 380,data4.width / 3, data4.height / 3);
            d5++;
        }
        else
        {
            image(data4, 550, 380,img.width / 3, img.height / 3); 
        }*/
    }
     else if(c1===7){
        image(extraCanvas6,0,0);
         textSize(40);
        fill(255, 255, 255);
    
    //fill(0, 102, 153, 51);
//text('word', 110+c, 190+c);
    if(c12<=180){
        text('Physical Layer ', 10+c12,50);
        c12++;
    }
    else
    {
      text('Physical Layer', 190,50);  
    }
         
          let s = 'Physical layer is the lowest layer of the OSI reference model. It is responsible for sending bits from one computer to another. This layer is not concerned with the meaning of the bits and deals with the setup of physical connection to the network and with transmission and reception of signals.';
     textSize(15);
fill(255);
   text(s, 10, 100, 700, 800);
    
    if(c13<=60){
       image(img12, c13+10, 190,img12.width/2, img12.height/2);
        c13++;
    }
    else
    {
      image(img12, 70, 190,img12.width/2, img12.height/2); 
        
    }
   // text1();
   //circle1();
     }
}
    


function circle1(){
    c1=1;
    // background(225,225,255);
    
}
function circle2(){
    c1=2;
    // background(225,225,255);
    
}
function circle3(){
    c1=3;
    // background(225,225,255);
    
}
function circle4(){
    c1=4;
    // background(225,225,255);
    
}
function circle5(){
    c1=5;
    // background(225,225,255);
    
}

function circle6(){
    c1=6;
    // background(225,225,255);
    
}
function circle7(){
    c1=7;
    // background(225,225,255);
    
}
function applicationeffect(){
     
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

