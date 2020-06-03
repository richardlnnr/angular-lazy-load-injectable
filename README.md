# Angular Elements with Lazy load and provider injectable

This project was generated to demonstrate an issue in Angular Elements when you use lazy loaded module and don't use providedIn: 'root' in a service.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Problem

When we start the application, the following error is displayed on the browser console:
That problem only happen when the component is exported as a Custom Element.

```
core.js:6228 ERROR NullInjectorError: R3InjectorError(AppModule)[ContentService -> ContentService -> ContentService]: 
  NullInjectorError: No provider for ContentService!
    at NullInjector.get (http://localhost:4200/vendor.js:8310:27)
    at R3Injector.get (http://localhost:4200/vendor.js:22304:33)
    at R3Injector.get (http://localhost:4200/vendor.js:22304:33)
    at R3Injector.get (http://localhost:4200/vendor.js:22304:33)
    at NgModuleRef$1.get (http://localhost:4200/vendor.js:39605:33)
    at Object.get (http://localhost:4200/vendor.js:37339:35)
    at getOrCreateInjectable (http://localhost:4200/vendor.js:12112:39)
    at Module.ɵɵdirectiveInject (http://localhost:4200/vendor.js:26119:12)
    at NodeInjectorFactory.ContentComponent_Factory [as factory] (http://localhost:4200/feature-feature-module.js:26:162)
    at getNodeInjectable (http://localhost:4200/vendor.js:12257:44)
```

```
ERROR Error: Uncaught (in promise): NullInjectorError: R3InjectorError(AppModule)[ContentService -> ContentService -> ContentService]: 
  NullInjectorError: No provider for ContentService!
NullInjectorError: R3InjectorError(AppModule)[ContentService -> ContentService -> ContentService]: 
  NullInjectorError: No provider for ContentService!
    at NullInjector.get (core.js:1085)
    at R3Injector.get (core.js:16955)
    at R3Injector.get (core.js:16955)
    at R3Injector.get (core.js:16955)
    at NgModuleRef$1.get (core.js:36329)
    at Object.get (core.js:33972)
    at getOrCreateInjectable (core.js:5848)
    at Module.ɵɵdirectiveInject (core.js:21103)
    at NodeInjectorFactory.ContentComponent_Factory [as factory] (content.component.ts:9)
    at getNodeInjectable (core.js:5993)
    at resolvePromise (zone-evergreen.js:798)
    at resolvePromise (zone-evergreen.js:750)
    at zone-evergreen.js:860
    at ZoneDelegate.invokeTask (zone-evergreen.js:399)
    at Object.onInvokeTask (core.js:41632)
    at ZoneDelegate.invokeTask (zone-evergreen.js:398)
    at Zone.runTask (zone-evergreen.js:167)
    at drainMicroTaskQueue (zone-evergreen.js:569)
```