import { Component, OnInit } from '@angular/core';
import { KpiService } from '../kpi.service';

import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';


export interface HierarchyNode {
  primaryUserId: string;
  children?: HierarchyNode[];
}

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent implements OnInit {

  constructor(private ks: KpiService) { }

  TREE_DATA: HierarchyNode[] = [];
  hierarchyData: any[] = [];

  ngOnInit(): void {
    this.ks.getHierarchy().subscribe(data => {
      this.hierarchyData = data.response;
      this.TREE_DATA = this.listToTree(this.hierarchyData);
      // console.log(this.TREE_DATA);
      this.dataSource.data = this.TREE_DATA;
    });
  }

  treeControl = new NestedTreeControl<HierarchyNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<HierarchyNode>();

  hasChild = (_: number, node: HierarchyNode) => !!node.children && node.children.length >= 0;


  listToTree(hierarchy: any) {
    let map = new Map<string, number>();
    let node: any, res = [], i, j;

    for (i = 0; i < hierarchy.length; i += 1) {
      map.set(hierarchy[i].primaryUserId, i);
      hierarchy[i].children = [];
    };

    for (i = 0; i < hierarchy.length; i++) {
      node = hierarchy[i];
      let ind = map.get(node.supervisorId);

      if (ind !== undefined) {
        hierarchy[ind].children.push(node);
      }
      else {
        res.push(node);
      }
    }
    // console.log(res);
    return res;
  }
}

