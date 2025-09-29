import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AdminLogin from './components/AdminLogin';
import SignUp from './components/RegistrationForm';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import AddEmployee from './components/Dashboard/AddEmployeeDashboard';
import EmployeeStatus from './components/Employees/EmployeeDashboard';
import UpdateProfile from './components/Profile/ProfileDashboard';
import Reviews from './components/Reviews/ReviewDashboard';
import CreateReview from './components/Reviews/CreateReviewDashboard';
import Settings from './components/Settings/SettingsDashboard';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Verify from './components/ForgotPassword/VerifyCode';
import UpdatePassword from './components/ForgotPassword/UpdatePassword';
import SubAdminDetails from './components/Subadmin/SubAdminDashboard';
import CreateSubadmin from './components/Subadmin/CreateSubadminDashboard';
import ArticalsNews from './components/ArticalsNews/ArticalsNewsDashboard';
import EmployeeLogin from './components/EmployeeLogin';
import ManageRequest from './components/Employees/ManageRequest';
import InactiveEmployeesTable from './components/Employees/InactiveEmployeesTable';
import SubAdminTable from './components/Subadmin/SubAdminDashboard';
import SubAdminDashboard from './components/Subadmin/SubAdminDashboard';
import SubAdminTableDashboard from './components/Subadmin/SubadminTableDashboard';
import CreateSubadminDashboard from './components/Subadmin/CreateSubadminDashboard';
import CreateArticleNews from './components/ArticalsNews/CreateArticleDashboard';
import NewEmployeeDetails from './components/Dashboard/AddEmployee';
import AddEmployeeDashboard from './components/Dashboard/AddEmployeeDashboard';
import ManageEmployeeDashboard from './components/Employees/ManageRequestdashboard';
import ManageRequestDashboard from './components/Employees/ManageRequestdashboard';
import InactiveEmployeesDashboard from './components/Employees/InactiveEmployeeDashboard';
import EmployeeDashboard from './components/Employees/EmployeeDashboard';
import UsersDashboard from './components/Employees/EmployeesUsers/UsersDashboard';
import EmployeeProfileDashboard from './components/Employees/EmployeeProfile/ProfileDashboard';
import EmployeeDashboardAd from './components/Dashboard/EmployeeDashboard';
import ResetPasswordPage from './components/ForgotPassword/UpdatePassword';
import AdminForgotPassword from './components/AdminForgotPassword/ForgotPassword';
import AdminResetPasswordPage from './components/AdminForgotPassword/UpdatePassword';
import WhyFinmapDash from './components/WhyFinmap/WhyFinmapDash';
import AboutUsDash from './components/AboutUs/AboutUsDash';
import CustomerEducation from './components/CustomerEucation/CustomerEducation';
import ContactUsDash from './components/ContactUs/ContactUsDash';
import SupportDash from './components/Support/SupportDash';
import ServicesDash from './components/Services/ServicesDashboard';
import ArticleHomePageDash from './components/ArticalsNews/ArticleHomePageDashboard';
import TermsAndConditions from './components/TermsAndConditions/termsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import ProtectedRoute from './protectedRoute/protectedRoute';
import CustomerProfileDashboard from './components/Employees/customerProfiledashboard/customerprofileDashboard';
import SettingDashboard from './components/Settings/SettingsDashboard';
import EmployeeSettingDashboard from './components/Employees/Settings/SettingsDashboard';
import NewsDetail from './components/NewsDetail/NewsDetailPage';
import NewsDetailDash from './components/NewsDetail/NewsDetailDashboard';
import CheckInDashboard from './components/Dashboard/EmployeeCheckIns/CheckInDashboard';
import Courses from './components/Courses/Courses';
import Resources from './components/Resources/Resources';
import Guidance from './components/Guidance/Guidance';
import Community from './components/Community/Community';
import Layout from './components/Layout';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
// import { useAuth } from './context/authContext';
const App = () => {



  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> 
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<EmployeeLogin/>}/>
        <Route path="/employee-signup" element={<SignUp />} />
        <Route path="/customerDetails/:customerId" element={<CustomerProfileDashboard />} />
        <Route path="/employee-dashboard" element={<EmployeeDashboard/>} />
        <Route path="/employee-update-profile" element={<EmployeeProfileDashboard/>} />
        <Route path="/employee-employees" element={<EmployeeDashboard />} />
        <Route path="/privatezxl-dashboard" element={<AdminDashboard />} />
        <Route path="/privatezxl-add-employee" element={<AddEmployee />} />
        <Route path="/privatezxl-login" element={<AdminLogin />} />
        <Route path="/privatezxl-employees" element={<EmployeeDashboardAd />} />
        <Route path="/privatezxl-update-profile" element={<UpdateProfile/>} />
        {/* <Route path="/employee-update-profile" element={<EmployeeProfileForm/>} /> */}
        <Route path="/privatezxl-reviews" element={<Reviews />} />
        <Route path="/privatezxl-create-review" element={<CreateReview />} />
        <Route path="/privatezxl-settings" element={<SettingDashboard/>} />
        <Route path="/employee-settings" element={<EmployeeSettingDashboard/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/privatezxl-forgot-password" element={<AdminForgotPassword />} />
        <Route path="/forgot-password/verify" element={<Verify />} />
        <Route path="/employee-forgot-password/reset-password/:token" element={<ResetPasswordPage/>} />
        <Route path="/privatezxl-forgot-password/reset-password/:token" element={<AdminResetPasswordPage/>} />
        <Route path="/privatezxl-subadmins" element={<SubAdminTableDashboard />} />
        <Route path="/privatezxl-employee-checkins/:employeeId" element={<CheckInDashboard />} />
        {/* <Route path="/privatezxl-subadmin-details-table" element={< />} /> */}
        <Route path="/privatezxl-admin-create-subadmin" element={<CreateSubadminDashboard />} />
        <Route path="/privatezxl-employee-create-employee" element={<AddEmployeeDashboard />} />
        <Route path="/privatezxl-employee-manage-request" element={<ManageRequestDashboard/>} />
        <Route path="/privatezxl-employee-inactive-employees" element={<InactiveEmployeesDashboard />} />
        <Route path="/articles-news" element={<ArticalsNews />} />
        <Route path="/create-article-news" element={<CreateArticleNews/>} />
        <Route path="/news/:newsId" element={<NewsDetailDash/>} />

        <Route path="/employee-users" element={<UsersDashboard/>} />
        <Route path="/whyUs" element={<WhyFinmapDash/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path="/faq" element={<CustomerEducation/>} />
        <Route path="/support" element={<SupportDash/>} />
        <Route path="/services" element={<ServicesDash/>} />
        <Route path="/articles" element={<ArticleHomePageDash/>} />
        <Route path="/tcs" element={<TermsAndConditions/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
 