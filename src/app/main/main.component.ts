import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  jobForm: FormGroup;
 
  preview: string = '';
 
  ngOnInit(): void {
    this.jobForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
    });
  }
 
  save() {
    this.preview = JSON.stringify(this.jobForm.value);
  }

  
  projects: Project[] = [
    {
      title: 'Project 1',
      image: 'path/to/project1-image.jpg',
      description: 'This is project 1.',
      link: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      image: 'path/to/project2-image.jpg',
      description: 'This is project 2.',
      link: 'https://example.com/project2'
    },
    {
      title: 'Project 3',
      image: 'path/to/project3-image.jpg',
      description: 'This is project 3.',
      link: 'https://example.com/project3'
    }
  ];
}
