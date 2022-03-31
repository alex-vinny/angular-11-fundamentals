import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./j-query.service";

@Directive({
    selector: '[modal-trigger]',

})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement

    constructor(@Inject(JQ_TOKEN) private $: any, refEl: ElementRef) {
        this.el = refEl.nativeElement       
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$('#simple-modal').modal({})
        })
    }
}