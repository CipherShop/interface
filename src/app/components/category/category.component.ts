import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: number = -1;
  subcategory: number = -1;
  section: number = -1;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let category = params.get('category');
      if (!category) {
        this.router.navigate(['/']);
      } else {
        this.category = parseInt(category);
      }
      let subcategory = params.get('subcategory');
      if(subcategory) {
        this.subcategory = parseInt(subcategory);
      }
      let section = params.get('section');
      if(section) {
        this.section = parseInt(section);
      }
      console.log('C:'+this.category + ',S:' + this.subcategory + ',S3:' + this.section);
    });
  }

}
