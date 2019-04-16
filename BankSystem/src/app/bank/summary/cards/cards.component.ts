/**
 *  @author Rayhan Kasli
 *  @description This component file is used to set the bank data into cards
 */
import { Component, OnInit, Input } from '@angular/core';
import { Bank } from '../../bank.model';

/**
 * Component
 */
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  /**
   * convertData get data from summery(parent) componet
   */
  @Input() public convertData: Bank;

  public ngOnInit(): void {
  }

}
