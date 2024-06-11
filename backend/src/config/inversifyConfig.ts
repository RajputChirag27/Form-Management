import { Container } from 'inversify'
// import * as controller from '../controllers'
import { FormController } from '../controllers/formController'
// import * as service from '../services/index'
// import * as middleware from '../middlewares'

const container = new Container()

//  controllers
// for (const controllerName in controller) {
//   const Controller = controller[controllerName]
//   container.bind<typeof Controller>(Controller).to(Controller)
// }
container.bind<FormController>(FormController).to(FormController);
// container.bind<controller.AuthorController>(controller.AuthorController).toSelf();

// //  services
// for (const serviceName in service) {
//   const Service = service[serviceName]
//   container.bind<typeof Service>(Service).to(Service)
// }

// middlewares
// for (const middlewareName in middleware) {
//   const Middleware = middleware[middlewareName]
//   container.bind<typeof Middleware>(Middleware).to(Middleware)
// }

// container.bind<middleware.ValidatorMiddleWare>(middleware.ValidatorMiddleWare).toSelf();

// repositories



export default container
