Test Plan – SauceDemo Website

1. Objective

To verify the functionality, usability, reliability, and performance of the SauceDemo e-commerce website.

2. Scope of Testing

Login and logout

Product listing and product details

Product sorting

Add to cart and remove from cart

Checkout information

Order overview and order completion

3. Testing Types

Functional Testing

UI Testing

Negative Testing

Boundary Value Testing

Integration Testing

Regression Testing

Compatibility Testing

4. Test Environment

Website: https://www.saucedemo.com/

Browser: Google Chrome

Operating System: Windows

Testing Type: Manual Testing

Test Accounts: standard_user, locked_out_user, problem_user, performance_glitch_user

5. Entry Criteria

Website is accessible.

Valid test credentials are available.

Browser is installed.

6. Exit Criteria

All planned test cases have been executed.

Critical defects have been reported.

Test results have been documented.

7. Deliverables

Test Plan

Test Cases

Bug Reports

Screenshots

Automation Test Scripts

API Test Results

ID        Test case                                                 Expected result                                             Priority
TC01	    Login with valid credentials	                           User logs in successfully	                                 High
TC02	    Login with invalid password	                             Error message appears	                                     High
TC03	    Login with empty username	                               Validation error appears	                                   High
TC04	    Login with empty password	                               Validation error appears	                                   High
TC05	    Login with locked-out user	                             Access denied message appears	                             High
TC06	    Login with special characters	                           Invalid credentials handled safely	                         Med
TC07	    Login with problem_user	                                 Record actual behavior	                                     Med
TC08	    Login with performance_glitch_user                       User can log in after any delay	                           Med
TC09	    Verify product listing	                                 Products display correctly	                                 High
TC10	    Verify product images	                                   Correct images match products	                             Med
TC11	    Sort products A to Z	                                   Alphabetical ascending order	                               Med
TC12	    Sort products Z to A	                                   Alphabetical descending order	                             Med
TC13	    Sort price low to high	                                 Prices appear ascending	                                   High
TC14	    Sort price high to low	                                 Prices appear descending	                                   High
TC15	    Add one product to cart	                                 Correct item is added	                                     High
TC16	    Add multiple products	                                   All selected items appear	                                 High
TC17	    Remove product from cart	                               Product is removed	                                         High
TC18	    Open empty cart	                                         Empty cart is displayed	                                   Med
TC19	    Checkout with empty cart	                               No invalid purchase should complete	                       High
TC20	    Checkout with empty first name	                         Validation error appears	                                   High
TC21	    Checkout with empty last name	                           Validation error appears	                                   High
TC22	    Checkout with empty postal code	                         Validation error appears	                                   High
TC23	    Checkout with special characters	                       Input is handled correctly	                                 Med
TC24	    Complete valid checkout	                                 Order confirmation appears	                                 High
TC25	    Browser back after order completion	                     No duplicate order is created	                             High
