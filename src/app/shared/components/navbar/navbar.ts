import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../../../features/search/components/search-bar/search-bar';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, SearchBar],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {}