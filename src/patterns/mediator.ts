/*
The Mediator pattern is similar to the Observer pattern in that it promotes loose coupling between objects.
The difference is that the Mediator pattern encapsulates the communication between objects in a single object,
whereas the Observer pattern defines a one-to-many dependency between objects.
*/

import express, { Request, Response, NextFunction } from 'express';

// Mediator middleware
function mediatorMiddleware(req: Request, res: Response, next: NextFunction) {
    // Perform mediation logic here
    console.log('Mediating request...');

    // Call the next middleware
    next();
}

// Example route handler
function exampleRouteHandler(req: Request, res: Response) {
    res.send('Hello, world!');
}

const app = express();

// Register mediator middleware
app.use(mediatorMiddleware);

// Register route handler
app.get('/', exampleRouteHandler);

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
