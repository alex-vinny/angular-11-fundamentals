import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../shared";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
    @Output() saveNewSession : EventEmitter<ISession> = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()

    newSessionForm: any
    name: any
    presenter: any
    duration: any
    level: any
    abstract: any

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl(
            '', 
            [
                Validators.required,
                Validators.maxLength(400),
                restrictedWords(['foo', 'bar'])
            ])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues:any) {
        let session:ISession = {
            id: Number(),
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            abstract: formValues.abstract,
            level: formValues.level,
            voters: []
        }
        this.saveNewSession.emit(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }
}