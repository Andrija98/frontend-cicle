import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { CandidatesListComponent } from "./manage-candidates/candidates-list/candidates-list.component";
import { ManageCandidatesComponent } from "./manage-candidates/manage-candidates.component";
import { ManageFormsComponent } from "./manage-forms/manage-forms.component";
import { ReviewFormsComponent } from "./review-forms/review-forms.component";

const appRoutes: Routes = [
    { path: '', component: AuthComponent, pathMatch: 'full'},
    { path: 'manage', component: ManageCandidatesComponent, children:[
        {path:'candidate-list', component: CandidatesListComponent},
        {path:'manage-forms', component: ManageFormsComponent},
        {path:'reviw-forms', component: ReviewFormsComponent}
    ]}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}