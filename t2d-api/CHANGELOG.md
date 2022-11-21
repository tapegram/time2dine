0 - Initial Hello World Deploy Attempt
1 - Trying to fix env var for dockerfile path
2 - Add in execution task role
3 - Apparently we have to use the container name "sample app" for ECS to work.
4 - Need to make a corresponding change to the aws action ^
5 - Update dockerfile to point to new unison project
6 - Wire up a mocked restaurants handler and health check handler
7 - Try pointing frontend to AWS Gateway and also update backend to provide cors headers for restaurants endpoint