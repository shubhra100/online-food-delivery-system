Online Food Delivery System

The Online Food Delivery System is a full-stack web application that allows customers to browse food items, place orders, and track order status. The system also includes an admin dashboard to manage menu items and monitor orders.

This project is built using Angular (Frontend) and ASP.NET Core Web API (Backend) with Entity Framework and SQL Server for database management.

---------------

Technologies Used :
Frontend

Angular Framework

TypeScript

HTML

CSS

Backend

ASP.NET Core Web API

C#

Entity Framework Core

JWT Authentication

Database

SQL Server

Version Control

Git

GitHub

API Testing

Swagger (Swashbuckle)

---------------------

Project Structure:

online-food-delivery-system
│
├── backend
│   └── FoodDeliveryAPI
│       ├── Controllers
│       ├── Models
│       ├── DTOs
│       ├── Data
│       ├── Program.cs
│       └── appsettings.json
│
└── frontend
    └── (Angular Application)
    -----------------
    
Features:

Customer Features

Customer Registration

Customer Login (JWT Authentication)

View Food Menu

Place Food Orders

Track Order Status

View Order History

Admin Features

Admin Login

Add Food Items

Update Food Items

Delete Food Items

Manage Customer Orders

Update Order Status

----------------

API Endpoints:

Authentication
Customer Login
POST /api/auth/login
Admin Login
POST /api/auth/admin-login
Customer APIs
Register Customer
POST /api/customer/register
Get Customers
GET /api/customer
Food Menu APIs
Get Food Menu
GET /api/food
Add Food Item
POST /api/food
Update Food Item
PUT /api/food/{id}
Delete Food Item
DELETE /api/food/{id}
Order APIs
Place Order
POST /api/order
Get Orders
GET /api/order
Update Order Status
PUT /api/order/{id}/status
Track Order
GET /api/trackorder/{orderId}
----------------


Authentication:


This project uses JWT (JSON Web Token) for secure authentication.

Steps:

User logs in using credentials.

API returns a JWT token.

The token is sent in the request header.

Example:

Authorization: Bearer YOUR_TOKEN

-----------------

Database Tables:

The system uses the following tables:

Customers

Admins

FoodItems

Orders

OrderItems

TrackOrderStatus

-------------------

Setup Instructions:

1 Clone Repository
git clone https://github.com/yourusername/online-food-delivery-system.git
2 Navigate to Backend
cd backend/FoodDeliveryAPI
3 Run the API
dotnet run

Swagger UI will open:

https://localhost:xxxx/swagger
4 Run Frontend

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Run Angular application:

ng serve

Frontend will run at:

http://localhost:4200
API Testing

APIs can be tested using:

Swagger UI

Postman

CI/CD Pipeline

A simple CI/CD pipeline can be configured using:

GitHub Actions

GitLab CI/CD

Jenkins

Pipeline stages include:

Restore dependencies

Build project

Run tests

Publish build artifacts

Future Enhancements

Payment gateway integration

Real-time order tracking

Email notifications

Mobile application support
