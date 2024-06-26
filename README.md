<h1>Travel Master</h1>

The Tourism app is a mobile application designed with the integration of artificial intelligence 
(AI) technologies, aimed at enhancing user experience in planning and executing trips to desired 
destinations. Through the utilization of various AI-related tools and technologies, the app offers 
users the convenience of exploring and selecting their preferred locations for travel with ease 
and efficiency.


<h1>Methodology</h1>
The methodology shows the steps that the application follows to give the user the required 
answers.
1. First user opens the application and enters the desired location.
2. The entered location is sent back to the backend and the longitude and latitude of that 
location.
3. Select all nearby tourist attractions places (places within a radius of 5Km)
4. Sort and send nearby tourist attractions places to the user.
5. Then User can select any of their desired travel attraction points.
6. Then they need to enter the starting date and where they would like to start the tour 
(Starting Point).
7. All the selected tourist attraction places and user inputs are sent to the backend.
8. Using Google map API all the destinations, longitudes, latitudes, and travel routes 
distances for each place and time duration for each place are fetched for the API.
9. By using distances between all the places, it created a distance matrix.
10. The distance matrix is sent to the genetic algorithm, and it will find the optimal path to 
travel to selected places.
11. The genetic algorithm returns the optimal path and optimal distance to travel all the 
selected places.
12. Then the distances and durations are calculated, and descriptions are generated using an 
open AI text generator and Google AI text generator.
13. The maximum time that the user can stay in one location is generated using an open AI 
text generator and the output directly goes to the natural language processing function. 
It will extract the time generated by the text generated and send it to the timecalculating function.
14. All the destination details and calculated time details are sent to the front end.
15. And also there is a chatbot created with a text generation feature that shows the full 
plan trip plan for the user.
16. Frontend arranges all the details with predefined components and shows those details 
to the user.
