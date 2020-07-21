"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var pagination_module_1 = require("../pagination.module");
/**
 * TestHostComponent
 */
var TestHostComponent = /** @class */ (function () {
    function TestHostComponent() {
        this.collectionSize = 10;
        this.pageSize = 10;
        this.currentPage = 1;
    }
    TestHostComponent = __decorate([
        core_1.Component({
            template: "\n<sui-pagination \n    [collectionSize]=\"collectionSize\" \n    [pageSize]=\"pageSize\"\n    [maxSize]=\"maxSize\"\n    [(page)]=\"currentPage\"\n    ></sui-pagination>\n"
        })
    ], TestHostComponent);
    return TestHostComponent;
}());
exports.TestHostComponent = TestHostComponent;
///////////////////////////////////////////////////////////
describe("Pagination", function () {
    var comp;
    var fixture;
    var pagination;
    var paginationElement;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [pagination_module_1.SuiPaginationModule],
            declarations: [TestHostComponent] // declare the test component
        });
        fixture = testing_1.TestBed.createComponent(TestHostComponent);
        comp = fixture.componentInstance; // TestHostComponent test instance
        paginationElement = fixture.debugElement.query(platform_browser_1.By.css("sui-pagination"));
        pagination = paginationElement.componentInstance;
    });
    it("should be created with default values", function () {
        expect(pagination).toBeTruthy();
        expect(pagination.pageSize).toBe(10);
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(1);
        expect(pagination.hasNavigationLinks).toBe(true);
        expect(pagination.maxSize).toBeUndefined();
        expect(pagination.pages.length).toBe(0);
    });
    it("should emit pageChange", function () {
        comp.collectionSize = 50;
        fixture.detectChanges();
        expect(pagination.collectionSize).toEqual(comp.collectionSize);
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(5);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
        pagination.page = 2;
        fixture.detectChanges();
        expect(comp.currentPage).toBe(2);
    });
    it("should automatically compute pages", function () {
        comp.collectionSize = 50;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(5);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
        comp.collectionSize = 100;
        comp.pageSize = 25;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(4);
        expect(pagination.pages).toEqual([1, 2, 3, 4]);
        comp.collectionSize = 101;
        comp.pageSize = 25;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(5);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
    });
    it("should apply pagination (no ellipses)", function () {
        pagination.hasEllipses = false;
        comp.collectionSize = 100;
        comp.pageSize = 10;
        comp.maxSize = 5;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
        comp.maxSize = 6;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5, 6]);
        pagination.page = 4;
        fixture.detectChanges();
        expect(pagination.page).toBe(4);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5, 6]);
        pagination.page = 7;
        fixture.detectChanges();
        expect(pagination.page).toBe(7);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([7, 8, 9, 10]);
    });
    it("should apply rotation (no ellipses)", function () {
        pagination.hasEllipses = false;
        pagination.canRotate = true;
        comp.collectionSize = 100;
        comp.pageSize = 10;
        comp.maxSize = 5;
        fixture.detectChanges();
        expect(pagination.page).toBe(1);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([1, 2, 3, 4, 5]);
        pagination.page = 4;
        fixture.detectChanges();
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([2, 3, 4, 5, 6]);
        pagination.page = 10;
        fixture.detectChanges();
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([6, 7, 8, 9, 10]);
        comp.maxSize = 4;
        pagination.page = 4;
        fixture.detectChanges();
        expect(pagination.page).toBe(4);
        expect(pagination.pageCount).toBe(10);
        expect(pagination.pages).toEqual([2, 3, 4, 5]);
    });
    it("should force navigation links if needed", function () {
        comp.collectionSize = 100;
        comp.pageSize = 10;
        comp.maxSize = 5;
        // Links visible
        fixture.detectChanges();
        expect(pagination.pages.length).toBe(5);
        expect(pagination.hasNavigationLinks).toBe(true);
        comp.maxSize = 10;
        pagination.hasNavigationLinks = false;
        // Links not visible
        fixture.detectChanges();
        expect(pagination.pages.length).toBe(10);
        expect(pagination.hasNavigationLinks).toBe(false);
        comp.maxSize = 5;
        // Links are forced to be visible
        fixture.detectChanges();
        expect(pagination.pages.length).toBe(5);
        expect(pagination.hasNavigationLinks).toBe(true);
    });
    it("should keep the start page number", function () {
        comp.collectionSize = 100;
        comp.pageSize = 10;
        comp.maxSize = 5;
        comp.currentPage = 5;
        fixture.detectChanges();
        expect(comp.currentPage).toBe(5);
        expect(pagination.page).toBe(5);
    });
});
