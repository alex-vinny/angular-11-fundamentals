import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {    
    @Input() sessions: ISession[] | undefined
    @Input() filterBy: string = ''
    @Input() sortBy: string = ''
    visibleSessions : ISession[] | undefined = []
    showIcon: boolean = true

    changeIconVisibility(event:boolean) {
        this.showIcon = event
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.sessions) {            
            this.filterSessions(this.filterBy, this.getSortFn())
        }
    }

    getSortFn() : (a: ISession, b: ISession) => number {
        if(this.sortBy === 'name') {
            return (a, b) => {
                if(a.name > b.name) return 1
                if(a.name === b.name) return 0
                return -1
            }
        } else {
            return (a, b) => {
               return b.voters.length - a.voters.length
            }
        }       
    }

    filterSessions(filter:string, sortFn: (a: ISession, b: ISession) => number) {
        if (filter == 'all') {
            this.visibleSessions = this.sessions?.slice(0)
        } else {
            this.visibleSessions = this.sessions?.filter(s => {
                return s.level.toLocaleLowerCase() === filter
            })
        }

        if (sortFn)
            this.visibleSessions?.sort(sortFn)
    }
}