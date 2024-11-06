import { Component, OnInit, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss']
})
export class ShowMoreComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<ShowMoreComponent>);

  data = inject(MAT_DIALOG_DATA)

  cancel() {
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
