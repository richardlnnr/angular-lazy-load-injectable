function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-feature-module"], {
  /***/
  "./src/app/feature/content/content.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/feature/content/content.component.ts ***!
    \******************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppFeatureContentContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./content.service */
    "./src/app/feature/content/content.service.ts");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(contentService) {
        _classCallCheck(this, ContentComponent);

        this.contentService = contentService;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.value = this.contentService.getValue();
        }
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 2,
      vars: 1,
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("content works! ", ctx.value, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './content.component.html',
          styleUrls: ['./content.component.scss']
        }]
      }], function () {
        return [{
          type: _content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/content/content.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/feature/content/content.module.ts ***!
    \***************************************************/

  /*! exports provided: ContentModule */

  /***/
  function srcAppFeatureContentContentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentModule", function () {
      return ContentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./content.component */
    "./src/app/feature/content/content.component.ts");
    /* harmony import */


    var _content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content.service */
    "./src/app/feature/content/content.service.ts");

    var ContentModule = function ContentModule() {
      _classCallCheck(this, ContentModule);
    };

    ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ContentModule
    });
    ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ContentModule_Factory(t) {
        return new (t || ContentModule)();
      },
      providers: [_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentModule, {
        declarations: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          providers: [_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/content/content.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/feature/content/content.service.ts ***!
    \****************************************************/

  /*! exports provided: ContentService */

  /***/
  function srcAppFeatureContentContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentService", function () {
      return ContentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContentService = /*#__PURE__*/function () {
      function ContentService() {
        _classCallCheck(this, ContentService);
      }

      _createClass(ContentService, [{
        key: "getValue",
        value: function getValue() {
          return 'Teste';
        }
      }]);

      return ContentService;
    }();

    ContentService.ɵfac = function ContentService_Factory(t) {
      return new (t || ContentService)();
    };

    ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentService,
      factory: ContentService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/feature-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/feature/feature-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: FeatureRoutingModule */

  /***/
  function srcAppFeatureFeatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureRoutingModule", function () {
      return FeatureRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _feature_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feature.component */
    "./src/app/feature/feature.component.ts");
    /* harmony import */


    var _content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./content/content.component */
    "./src/app/feature/content/content.component.ts");

    var routes = [{
      path: '',
      component: _feature_component__WEBPACK_IMPORTED_MODULE_2__["FeatureComponent"],
      children: [{
        path: '',
        redirectTo: 'content'
      }, {
        path: 'content',
        component: _content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
      }]
    }];

    var FeatureRoutingModule = function FeatureRoutingModule() {
      _classCallCheck(this, FeatureRoutingModule);
    };

    FeatureRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeatureRoutingModule
    });
    FeatureRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeatureRoutingModule_Factory(t) {
        return new (t || FeatureRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/feature.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/feature/feature.component.ts ***!
    \**********************************************/

  /*! exports provided: FeatureComponent */

  /***/
  function srcAppFeatureFeatureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent() {
        _classCallCheck(this, FeatureComponent);
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)();
    };

    FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeatureComponent,
      selectors: [["app-feature"]],
      decls: 3,
      vars: 0,
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "feature works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmUvZmVhdHVyZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-feature',
          templateUrl: './feature.component.html',
          styleUrls: ['./feature.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/feature/feature.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/feature/feature.module.ts ***!
    \*******************************************/

  /*! exports provided: FeatureModule */

  /***/
  function srcAppFeatureFeatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureModule", function () {
      return FeatureModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./feature-routing.module */
    "./src/app/feature/feature-routing.module.ts");
    /* harmony import */


    var _feature_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feature.component */
    "./src/app/feature/feature.component.ts");
    /* harmony import */


    var _content_content_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./content/content.module */
    "./src/app/feature/content/content.module.ts");

    var FeatureModule = function FeatureModule() {
      _classCallCheck(this, FeatureModule);
    };

    FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FeatureModule
    });
    FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FeatureModule_Factory(t) {
        return new (t || FeatureModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"], _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, {
        declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"], _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_feature_component__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _feature_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeatureRoutingModule"], _content_content_module__WEBPACK_IMPORTED_MODULE_4__["ContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=feature-feature-module-es5.js.map