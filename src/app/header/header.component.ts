import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit, OnDestroy{
    private userSub: Subscription;
    isAuthenticated = false;
    constructor(private datastorageService: DataStorageService, private authService: AuthService){}
    
    onSaveData(){
        this.datastorageService.storeRecipes();
    }
    onLogout(){
        this.authService.logout();
    }
    onFetchData(){
        this.datastorageService.fetchRecipes().subscribe();
    }
    ngOnInit(){
        this.userSub = this.authService.user.subscribe(
            user => {
                // this.isAuthenticated = !user ? false : true;
                this.isAuthenticated = !!user;

            }
        );
    }
    ngOnDestroy(){
        this.userSub.unsubscribe();
    }
}