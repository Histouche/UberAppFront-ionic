import { NgModule } from '@angular/core';
import { ProvidersEventEventDirective } from './providers-event-event/providers-event-event';
import { ProvidersProfileDirective } from './providers-profile/providers-profile';
@NgModule({
	declarations: [ProvidersEventEventDirective,
    ProvidersProfileDirective],
	imports: [],
	exports: [ProvidersEventEventDirective,
    ProvidersProfileDirective]
})
export class DirectivesModule {}
