import { Component } from '@angular/core';
import { Project } from '@critical-pass/project/types';
import { ProjectApiService } from '@critical-pass/shared/data-access';

@Component({
    selector: 'critical-pass-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'explorer';
    project!: Project;
    constructor(private projectApi: ProjectApiService) {}
}
