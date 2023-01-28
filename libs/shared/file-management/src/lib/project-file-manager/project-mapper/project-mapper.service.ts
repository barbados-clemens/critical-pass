import { Injectable } from '@angular/core';
import { Activity, ActivityProfile, Chart, Integration, Project, ProjectProfile } from '@critical-pass/project/types';
// import { Activity } from '../../../../../models/project/activity/activity';
// import { ProjectSerializerService } from '../../../../serializers/project/project-serializer.service';
// import { Project } from '../../../../../models/project/project';
// import { ActivitySerializerService } from '../../../../serializers/project/activity/activity-serializer.service';
// import { IntegrationSerializerService } from '../../../../serializers/project/integration/integration-serializer/integration-serializer.service';
// import { ChartSerializerService } from '../../../../serializers/project/activity/chart/chart-serializer.service';
// import { Integration } from '../../../../../models/project/integration/integration';
import { ProjectSerializerService, ActivitySerializerService, IntegrationSerializerService, ChartSerializerService } from '@critical-pass/shared/serializers';
@Injectable({
    providedIn: 'root',
})
export class ProjectMapperService {
    constructor(
        private projFactory: ProjectSerializerService,
        private activityFactory: ActivitySerializerService,
        private integrationFactory: IntegrationSerializerService,
        private chartFactory: ChartSerializerService,
    ) {}

    public createActivities(activityData: any, arrowData: any): Activity[] {
        return activityData.map((activity: any) => {
            const newActivity = this.activityFactory.fromJson();
            const profile = newActivity.profile;
            const keys = Object.keys(activity) as (keyof ActivityProfile)[];
            for (const attr of keys) {
                if (profile.hasOwnProperty(attr)) {
                    // profile[attr] = activity[attr];
                    this.setProp<ActivityProfile>(profile, activity, attr);
                }
            }
            newActivity.profile = profile;
            const arrow = arrowData.find((a: any) => (a as any).id === (activity as any).id);
            if (arrow) {
                const chartInfo = this.chartFactory.fromJson();
                const chartkeys = Object.keys(arrow) as (keyof Chart)[];
                for (const attr of chartkeys) {
                    if (chartInfo.hasOwnProperty(attr)) {
                        // chartInfo[attr] = arrow[attr];
                        this.setProp<Chart>(chartInfo, arrow, attr);
                    }
                }

                newActivity.chartInfo = chartInfo;
            }
            this.setActivityDates(newActivity);
            return newActivity;
        });
    }

    public setProp<T>(target: T, source: any, key: keyof T) {
        return (target[key] = source[key]);
    }
    public setActivityDates(activity: Activity) {}

    public getCritPathProject(projectProfileData: any): Project {
        const project = this.projFactory.fromJson();
        if (projectProfileData.length > 0) {
            const firstProfile = projectProfileData[0];
            const projkeys = Object.keys(firstProfile) as (keyof ProjectProfile)[];
            for (const attr of projkeys) {
                if (project.profile.hasOwnProperty(attr)) {
                    // project.profile[attr] = firstProfile[attr];
                    this.setProp<ProjectProfile>(project.profile, firstProfile, attr);
                }
            }
        }
        return project;
    }

    public createIntegrations(integrationData: any): Integration[] {
        return integrationData.map((int: any) => {
            const newIntegration = this.integrationFactory.fromJson();
            const keys = Object.keys(int) as (keyof Integration)[];
            for (const attr of keys) {
                if (newIntegration.hasOwnProperty(attr)) {
                    // newIntegration[attr] = int[attr];
                    this.setProp<Integration>(newIntegration, int, attr);
                }
            }
            return newIntegration;
        });
    }
}
