import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';

export interface Data {
  value: number;
}

@Component({
  selector: 'app-sort-chips',
  templateUrl: './sort-chips.component.html',
  styleUrls: ['./sort-chips.component.css']
})
export class SortChipsComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  datas: Data[] = [];
  datas1: Data[] = [];
  public inputForm: FormGroup;
  public searchForm: FormGroup;
  public show: boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.inputForm = this.fb.group({
      value: ['', Validators.required]
    });

    this.searchForm = this.fb.group({
      svalue: ['', Validators.required]
    });

  }

  public onInput(event: MatChipInputEvent): void {
    const input = event.input;
    var value: any = event.value;

    // Add our data
    if ((value || '').trim()) {
      this.datas.push({ value: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(data: Data): void {
    const index = this.datas.indexOf(data);

    if (index >= 0) {
      this.datas.splice(index, 1);
    }
  }

  toggle() {
    this.show = !this.show;
    console.log(this.inputForm.value);

    this.datas1 = this.datas;

    function sortValue(obj1, obj2) {
      return obj1.value - obj2.value;
    }

    this.datas1.sort(sortValue);
  }

  public onSearch() {

    for (var i = 0; i < this.datas1.length - 1; i++) {
      if (this.datas1[i].value == this.searchForm.value) {
        console.log(this.datas1[i]);
        break;
      }
    }
  }

}
