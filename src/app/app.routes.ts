import { Routes } from "@angular/router";
import { Mentor } from "./mentor-management/mentor/mentor";
import { MentorAssign } from "./mentor-management/mentor-assign/mentor-assign";
import { MentorProfile } from "./mentor-management/mentor-profile/mentor-profile";
import { MentorReview } from "./mentor-management/mentor-review/mentor-review";
import { Students } from "./student-management/student-management";


export const routes: Routes = [
    {path:'student', component:Students},
    { path: 'mentor', component: Mentor },
    { path: 'assign', component: MentorAssign},
    { path: 'profile/:id', component: MentorProfile },
    { path: 'review/:id', component: MentorReview},

];
