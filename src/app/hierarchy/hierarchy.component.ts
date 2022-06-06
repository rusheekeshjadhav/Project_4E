import { Component, OnInit } from '@angular/core';
import { KpiService } from '../kpi.service';

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(private ks: KpiService) { }

  hierarchyData: any[] = [];

  ngOnInit(): void {
    this.ks.getHierarchy().subscribe(data => {
      this.hierarchyData = data.response;
      this.listToTree(this.hierarchyData);
    })
  }

  listToTree(hierarchy: any) {
    let map = new Map<string, number>();
    let node: any, res = [0], i, j;

    for (i = 0; i < hierarchy.length; i += 1) {
      map.set(hierarchy[i].primaryUserId, i);
      hierarchy[i].children = [];
    };

    for (i = 0; i < hierarchy.length; i++) {
      node = hierarchy[i];
      let ind = map.get(node.supervisorId);

      if(ind !== undefined){
        hierarchy[ind].children.push(node);
      }
      else{
        res.push(node);
      }
    }
    return res;
  }
}

