<h1>Home AI - DoorMan</h1>
<h2>Team Details</h2>
<ul>
  <li>Veeresha M thotigar</li>
  <li>Hiresh Jakkala Bhaskar</li>
  <li>Hongkun Jin</li>
  <li>John Goza</li>
  </ul>

<h3>Youtube Demo</h3> -- Device: https://www.youtube.com/watch?v=51acqs5Suqs&t=6s<br>  -- APP: https://www.youtube.com/watch?v=K6G2NW9j84M&feature=youtu.be <br>
<h3>Presentation</h3> - https://docs.google.com/presentation/d/1CCoUS8pnQu3Eeur3hH-vWI99kkYMaEVAxwOaO2iTkmg/edit?usp=sharing
<h2> Problem Statement</h2>
<ul>
  <li>Set up motion sensor, light, and camera at the front door.</li>
<li>Get lights to turn on/off on command</li>
<li>When motion sensor senses that someone has arrived, it will create an event that will turn on the lights and take a picture.</li>
<li>Stretch Goal: Data will be sent to a visualization platform (like an application) with the picture and the time stamp.</li>
<li>Create an application that can notify the user when someone has arrived.</li>
</ul>
<h2> Technology Used</h2>
<ul>
  <li>Raspberrypi</li>
<li>Node RED platform</li>
<li>Python</li>
<li>Local server using Linux</li>
<li>Motion sensor</li>
<li>Camera</li>
<li>Light</li>
<li>Ionic framework</li>
<li>Google Firebase</li>
<li>Cordova</li>
  </ul>
<h2> Instructions to setup </h2>
<li> Since the project is based on the raspberry pi (with camera), please gain access to the configured hardware before attempting to replicate performance.</li>
<li> To build project: </li>
<li> Plugin raspberry pi</li>
<li> start node-red then navigate to 127.0.0.1:1880/ui for the Dashboard </li>
<li> This project includes app and text notifications!! To download the app or for your phone number to be added, contact any of the team members.</li>

<h2> App Setup </h2>
<li> The app code link: https://github.com/veereshthotigar/Hackathon_home_AI/tree/master/src/App</li>
<li> Download the code and run `npm install` and `ionic cordova prepare` Then the application is all set</li>
<li> You could run `ionic cordova run browser` or `ionic cordova run android` to test the app</li>
<li> The debug APK download link:https://github.com/veereshthotigar/Hackathon_home_AI/tree/IonicApp/src/App/APK_Android</li>
<h3> App Notification  <h3>
<li> Node js code link: https://github.com/veereshthotigar/Hackathon_home_AI/tree/IonicApp/src/NodejsTrigger</li>
<li> For database connection, deploy the function on heroku and using cron-job schedule running every minute</li>
<li> Notification: using firebase cloud function to detect new data and send notification to user by app</li>
<li> Then, the app will give user notification when the device add a new data to database</li>



