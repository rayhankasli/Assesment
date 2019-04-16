/**
 *  @author Rayhan Kasli
 *  @description This component file is used to set data in header summary 
 */
import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../bank.model';

/**
 * Component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * convertData get data from summery(parent) componet
   */
  @Input() public convertData: Bank;

  constructor() { }

  public ngOnInit(): void {
  }

}
