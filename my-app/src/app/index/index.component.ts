import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  articles = [
    {
        "image": "B0B0B0.png",
        "title": "no article",
        "description": "no article",
        "link": "#",
        "link_color": "purple"
    },
    {
        "image": "B0B0B0.png",
        "title": "no article",
        "description": "no article",
        "link": "#",
        "link_color": "blue"
    },
            {
        "image": "B0B0B0.png",
        "title": "no article",
        "description": "no article",
        "link": "#",
        "link_color": "pink"
    }
]
}
