0 - Initial Hello World Deploy Attempt
1 - Trying to fix env var for dockerfile path
2 - Add in execution task role
3 - Apparently we have to use the container name "sample app" for ECS to work.
4 - Need to make a corresponding change to the aws action ^
5 - Update dockerfile to point to new unison project
6 - Wire up a mocked restaurants handler and health check handler
7 - Try pointing frontend to AWS Gateway and also update backend to provide cors headers for restaurants endpoint
8 - Try to fix restaurants route (add headers to response instead of matching on headers in the request)
9 - Small change to mocked data formatting and removed cors headers from restaurants reponses
10 - Undo previous cors header changes since it stopped working
11 - Deploy changes to use dynamic data on the restaurants endpoint
12 - Retrigger deploy after updating env var in action and github secrets
13 - Update dockerfile to require env var as arg and pass in via action
14 - Fix typo in dockerfile
15 - Doubling cpu and memory for task to see if that helps with performance
16 - Doubling cpy and memory for the task again! Why not? $$$$$
17 - Upgrade to new GooglePlaces lib
