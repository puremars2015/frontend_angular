import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalculateComponent } from './calculate/calculate.component';
import { ContactComponent } from './contact/contact.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { IndexComponent } from './index/index.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { ReadArticleComponent } from './read-article/read-article.component';

export const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'calculate', component: CalculateComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'edit_article', component: EditArticleComponent },
    { path: 'index', component: IndexComponent },
    { path: 'list_article', component: ListArticleComponent },
    { path: 'read_article/:id', component: ReadArticleComponent },
];
