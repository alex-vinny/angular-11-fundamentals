import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {
    visible: boolean = false
    @Output() expandedWell: EventEmitter<boolean> = new EventEmitter()

    toggleContent() {
        this.visible = !this.visible;
        this.expandedWell.emit(this.visible)
    }
}