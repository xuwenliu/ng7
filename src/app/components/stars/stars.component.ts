import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-stars',
    templateUrl: './stars.component.html',
    styleUrls: ['./stars.component.less']
})
export class StarsComponent implements OnInit {
    private stars: boolean[];
    @Input()
    private rating: number = 0;
    constructor() { 
        console.log(this.rating)
    }

    ngOnInit() {
        this.stars = [];
        for (let i = 1; i <= 5; i++){
            this.stars.push(i>=this.rating);
        }
    }

}
